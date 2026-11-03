"""Validação de assinatura, decodificação e normalização de PNG/JPEG."""

from io import BytesIO

from PIL import Image, UnidentifiedImageError

from app.ingestion.base import DocumentoNormalizado, ErroIngestao
from app.schemas.enums import TipoArquivo

_MAX_PIXELS = 25_000_000


def normalizar_imagem(conteudo: bytes, tipo_esperado: TipoArquivo) -> DocumentoNormalizado:
    try:
        with Image.open(BytesIO(conteudo)) as imagem:
            if imagem.format != tipo_esperado.value:
                raise ErroIngestao(
                    "formato_nao_suportado", "O conteúdo real não corresponde ao formato informado."
                )
            if imagem.width * imagem.height > _MAX_PIXELS:
                raise ErroIngestao("arquivo_muito_grande", "A imagem excede o limite de pixels.")
            imagem.verify()
        with Image.open(BytesIO(conteudo)) as imagem:
            if imagem.width * imagem.height > _MAX_PIXELS:
                raise ErroIngestao("arquivo_muito_grande", "A imagem excede o limite de pixels.")
            imagem.load()
            # PNG sem perda e compatível com futura entrada multimodal.
            if imagem.mode not in {"RGB", "RGBA"}:
                imagem = imagem.convert("RGBA" if "transparency" in imagem.info else "RGB")
            buffer = BytesIO()
            imagem.save(buffer, format="PNG", optimize=False)
    except ErroIngestao:
        raise
    except (UnidentifiedImageError, OSError, ValueError, Image.DecompressionBombError) as exc:
        raise ErroIngestao("arquivo_corrompido", "Não foi possível decodificar a imagem.") from exc
    return DocumentoNormalizado(imagens_png=(buffer.getvalue(),))
