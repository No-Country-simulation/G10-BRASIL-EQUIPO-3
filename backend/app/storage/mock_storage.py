class MockStorage:
    """Armazenamento simulado em memoria."""

    def __init__(self):
        self._objetos: dict[str, bytes] = {}

    def salvar(self, chave: str, conteudo: bytes) -> None:
        if not chave:
            raise ValueError("A chave nao pode estar vazia.")

        if chave in self._objetos:
            raise FileExistsError(f"Ja existe um objeto armazenado com a chave: {chave}")

        self._objetos[chave] = conteudo

    def ler(self, chave: str) -> bytes | None:
        return self._objetos.get(chave)

    def listar(self, prefixo: str = "") -> list[str]:
        return sorted(chave for chave in self._objetos if chave.startswith(prefixo))

    def verificar_saude(self) -> bool:
        return True
