"""Valida o JSON exportado pelo modo de demonstração contra os schemas Pydantic do backend."""

from __future__ import annotations

import json
import sys
from pathlib import Path

backend, arquivo = Path(sys.argv[1]).resolve(), Path(sys.argv[2])
sys.path.insert(0, str(backend))

from app.schemas.output import RespostaTriagem  # noqa: E402
from app.schemas.review import RequisicaoRevisao  # noqa: E402
from app.services.review_service import registrar_revisao  # noqa: E402

dados = json.loads(arquivo.read_text(encoding="utf-8"))
falhas: list[str] = []
total = 0


def normalizar(resposta: RespostaTriagem) -> dict:
    """Dump comparável: remove somente os instantes gerados em tempo de execução."""
    d = resposta.model_dump(mode="json")
    for r in d["historico_revisao"]:
        r.pop("data_hora", None)
    alerta = (d.get("decisao_roteamento") or {}).get("notificacao_gerada")
    if alerta:
        alerta.pop("gerada_em", None)
    return d


# 1) Toda resposta do mock precisa ser válida para `RespostaTriagem`.
for r in dados["respostas"]:
    total += 1
    try:
        RespostaTriagem.model_validate(r)
    except Exception as exc:  # noqa: BLE001
        falhas.append(f"resposta {r.get('documento_id')}: {str(exc)[:400]}")

# 2) Revisões simuladas (TS) × `registrar_revisao` (Python).
for rev in dados["revisoes"]:
    total += 1
    rotulo = f"revisão {rev['nome']} em {rev['entrada']['documento_id']}"
    entrada = RespostaTriagem.model_validate(rev["entrada"])
    try:
        esperado = registrar_revisao(entrada, RequisicaoRevisao.model_validate(rev["requisicao"]))
        erro_py = None
    except ValueError as exc:  # inclui ValidationError do Pydantic
        esperado, erro_py = None, str(exc)

    if rev["erro"] is not None or erro_py is not None:
        if (rev["erro"] is None) != (erro_py is None):
            falhas.append(f"{rotulo}: TS={'erro' if rev['erro'] else 'ok'} / Python={'erro' if erro_py else 'ok'} ({rev['erro'] or erro_py})")
        continue
    try:
        obtido = RespostaTriagem.model_validate(rev["saida"])
    except Exception as exc:  # noqa: BLE001
        falhas.append(f"{rotulo}: saída do mock inválida: {str(exc)[:400]}")
        continue
    a, b = normalizar(obtido), normalizar(esperado)
    # `armazenamento_oci` não é tocado pelo serviço; o mock também não deve alterá-lo.
    diff = [k for k in sorted(set(a) | set(b)) if a.get(k) != b.get(k)]
    if diff:
        falhas.append(f"{rotulo}: divergência em {', '.join(diff)}")

# 3) Estados que não são `em_auditoria` precisam ser recusados.
for item in dados["naoRevisaveis"]:
    total += 1
    if item["erro"] is None:
        falhas.append(f"{item['entrada']['documento_id']}: revisão aceita fora de em_auditoria")

print(f"{total} verificações · {len(falhas)} falha(s)")
for f in falhas:
    print(" ✗", f)
sys.exit(1 if falhas else 0)
