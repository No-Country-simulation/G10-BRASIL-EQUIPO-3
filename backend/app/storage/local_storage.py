from pathlib import Path


class MockStorageLocal:
    """Armazenamento simulado em diretorio local."""

    def __init__(self, diretorio: Path):
        self.diretorio = Path(diretorio)
        self.diretorio.mkdir(parents=True, exist_ok=True)

    def _caminho(self, chave: str) -> Path:
        if not chave:
            raise ValueError("A chave nao pode estar vazia.")

        caminho_relativo = Path(chave)

        if (
            caminho_relativo.is_absolute()
            or ".." in caminho_relativo.parts
            or "\\" in chave
            or ":" in chave
        ):
            raise ValueError("Chave de armazenamento invalida.")

        raiz = self.diretorio.resolve()
        caminho = raiz / caminho_relativo

        atual = raiz

        for parte in caminho_relativo.parts:
            atual = atual / parte

            if atual.is_symlink():
                raise ValueError("Links simbolicos nao sao permitidos.")

        caminho_resolvido = caminho.resolve()

        if not caminho_resolvido.is_relative_to(raiz):
            raise ValueError("Chave fora do diretorio permitido.")

        return caminho_resolvido

    def salvar(self, chave: str, conteudo: bytes) -> None:
        caminho = self._caminho(chave)
        caminho.parent.mkdir(parents=True, exist_ok=True)

        with caminho.open("xb") as arquivo:
            arquivo.write(conteudo)

    def ler(self, chave: str) -> bytes | None:
        caminho = self._caminho(chave)

        if not caminho.is_file():
            return None

        return caminho.read_bytes()

    def listar(self, prefixo: str = "") -> list[str]:
        resultado = []

        for arquivo in self.diretorio.rglob("*"):
            if arquivo.is_file():
                chave = arquivo.relative_to(self.diretorio).as_posix()

                if chave.startswith(prefixo):
                    resultado.append(chave)

        return sorted(resultado)

    def verificar_saude(self) -> bool:
        return self.diretorio.is_dir()
