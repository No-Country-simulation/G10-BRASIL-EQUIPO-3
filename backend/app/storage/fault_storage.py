from app.storage.mock_storage import MockStorage


class MockStorageComFalha(MockStorage):
    """MockStorage que permite simular falhas."""

    def __init__(self, falha_em: str | None = None):
        super().__init__()
        self.falha_em = falha_em

    def salvar(self, chave: str, conteudo: bytes) -> None:
        if self.falha_em == "salvar":
            raise OSError("Falha simulada ao salvar documento.")

        super().salvar(chave, conteudo)

    def ler(self, chave: str) -> bytes | None:
        if self.falha_em == "ler":
            raise OSError("Falha simulada ao recuperar documento.")

        return super().ler(chave)

    def listar(self, prefixo: str = "") -> list[str]:
        if self.falha_em == "listar":
            raise OSError("Falha simulada ao listar documentos.")

        return super().listar(prefixo)

    def verificar_saude(self) -> bool:
        if self.falha_em == "saude":
            return False

        return super().verificar_saude()
