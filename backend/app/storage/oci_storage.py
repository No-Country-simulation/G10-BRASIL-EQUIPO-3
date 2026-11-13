"""Adaptador do contrato de armazenamento para OCI Object Storage."""

from __future__ import annotations

from io import BytesIO

import oci
from oci.exceptions import ServiceError
from requests.exceptions import RequestException

from app.core.config import Settings


class OCIStorage:
    """Armazena objetos no bucket OCI configurado para a aplicação."""

    def __init__(self, settings: Settings):
        if not settings.oci_namespace or not settings.oci_region or not settings.oci_bucket:
            raise ValueError("Namespace, regiao e bucket OCI precisam estar configurados.")

        config = oci.config.from_file(profile_name=settings.oci_config_profile)
        config["region"] = settings.oci_region
        oci.config.validate_config(config)

        self.namespace = settings.oci_namespace
        self.bucket = settings.oci_bucket
        self._client = oci.object_storage.ObjectStorageClient(config)

    @staticmethod
    def _validar_chave(chave: str) -> None:
        if (
            not chave
            or chave.startswith("/")
            or "\\" in chave
            or ":" in chave
            or any(parte in {"", ".", ".."} for parte in chave.split("/"))
        ):
            raise ValueError("Chave de armazenamento invalida.")

    @staticmethod
    def _traduzir_erro() -> OSError:
        return OSError("Falha ao acessar o OCI Object Storage.")

    def salvar(self, chave: str, conteudo: bytes) -> None:
        self._validar_chave(chave)

        try:
            self._client.put_object(
                self.namespace,
                self.bucket,
                chave,
                BytesIO(conteudo),
                content_length=len(conteudo),
                if_none_match="*",
            )
        except ServiceError as erro:
            if erro.status == 412 or erro.code in {"PreconditionFailed", "ObjectAlreadyExists"}:
                raise FileExistsError("Ja existe um objeto com essa chave no OCI.") from erro
            raise self._traduzir_erro() from erro
        except RequestException as erro:
            raise self._traduzir_erro() from erro

    def ler(self, chave: str) -> bytes | None:
        self._validar_chave(chave)

        try:
            resposta = self._client.get_object(self.namespace, self.bucket, chave)
            if resposta is None:
                raise OSError("O OCI nao retornou uma resposta para o objeto.")
            corpo = resposta.data
            if corpo is None:
                raise OSError("O OCI retornou uma resposta sem o corpo do objeto.")
            if hasattr(corpo, "read"):
                return corpo.read()
            if hasattr(corpo, "raw") and hasattr(corpo.raw, "read"):
                return corpo.raw.read()
            if isinstance(corpo, bytes):
                return corpo
            raise OSError("O OCI retornou um corpo de objeto em formato inesperado.")
        except ServiceError as erro:
            if erro.status == 404:
                return None
            raise self._traduzir_erro() from erro
        except RequestException as erro:
            raise self._traduzir_erro() from erro

    def listar(self, prefixo: str = "") -> list[str]:
        if prefixo:
            chave_prefixo = prefixo[:-1] if prefixo.endswith("/") else prefixo
            self._validar_chave(chave_prefixo)

        nomes: list[str] = []
        inicio: str | None = None

        try:
            while True:
                parametros = {"prefix": prefixo}
                if inicio is not None:
                    parametros["start"] = inicio

                resposta = self._client.list_objects(
                    self.namespace,
                    self.bucket,
                    **parametros,
                )
                if resposta is None:
                    raise OSError("O OCI nao retornou uma resposta ao listar os objetos.")
                dados = resposta.data
                if dados is None:
                    raise OSError("O OCI retornou uma listagem sem dados.")

                nomes.extend(objeto.name for objeto in dados.objects)

                proximo_inicio = dados.next_start_with
                if not proximo_inicio:
                    break
                if proximo_inicio == inicio:
                    raise OSError("Paginacao OCI retornou um marcador repetido.")
                inicio = proximo_inicio
        except ServiceError as erro:
            raise self._traduzir_erro() from erro
        except RequestException as erro:
            raise self._traduzir_erro() from erro

        return sorted(nomes)

    def verificar_saude(self) -> bool:
        try:
            self._client.list_objects(
                self.namespace,
                self.bucket,
                limit=1,
                fields="name",
            )
        except (ServiceError, RequestException):
            return False
        return True
