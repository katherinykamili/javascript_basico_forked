const inputNome = document.getElementById("nome");
const inputGenero = document.getElementById("genero");
const inputAno = document.getElementById("ano");
const botaoCadastrar = document.getElementById("botaoCadastrar");
const botaoTema = document.getElementById("botaoTema");
const listaFilmes = document.getElementById("listaFilmes");
const mensagemValidacao = document.getElementById("mensagemValidacao");
const contador = document.getElementById("contador");

let filmes = JSON.parse(localStorage.getItem("filmes")) || [];

document.addEventListener("DOMContentLoaded", () => {
  atualizarListaFilmes();
  atualizarContador();
});

botaoCadastrar.addEventListener("click", cadastrarFilme);

botaoTema.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

function cadastrarFilme() {
  const nome = inputNome.value.trim();
  const genero = inputGenero.value;
  const ano = inputAno.value.trim();

  if (nome === "" || genero === "" || ano === "") {
    exibirMensagem("Preencha todos os campos!", false);
    return;
  }

  if (ano < 1900 || ano > 2100) {
    exibirMensagem("Digite um ano válido!", false);
    return;
  }

  const filme = {
    id: Date.now(),
    nome,
    genero,
    ano
  };

  filmes.push(filme);
  salvarFilmes();
  atualizarListaFilmes();
  atualizarContador();
  limparFormulario();

  exibirMensagem("Filme cadastrado com sucesso!", true);
}

function excluirFilme(id) {
  filmes = filmes.filter((filme) => filme.id !== id);
  salvarFilmes();
  atualizarListaFilmes();
  atualizarContador();
}

function atualizarListaFilmes() {
  listaFilmes.innerHTML = "";

  if (filmes.length === 0) {
    const vazio = document.createElement("div");
    vazio.classList.add("empty-state");
    vazio.innerHTML = `
      <div class="emoji">🎬</div>
      <p>Nenhum filme cadastrado ainda.</p>
    `;
    listaFilmes.appendChild(vazio);
    return;
  }

  filmes.forEach((filme) => {
    const card = document.createElement("div");
    card.classList.add("filme");

    card.innerHTML = `
      <h3>🎬 ${filme.nome}</h3>
      <div class="filme-info">
        <div class="info-row"><span>🎭</span><span>${filme.genero}</span></div>
        <div class="info-row"><span>📅</span><span>${filme.ano}</span></div>
      </div>
      <button class="btn-excluir">Excluir</button>
    `;

    card.querySelector(".btn-excluir").addEventListener("click", () => {
      excluirFilme(filme.id);
      card.remove();
    });

    listaFilmes.appendChild(card);
  });
}

function atualizarContador() {
  contador.textContent = `Filmes cadastrados: ${filmes.length}`;
}

function salvarFilmes() {
  localStorage.setItem("filmes", JSON.stringify(filmes));
}

function limparFormulario() {
  inputNome.value = "";
  inputGenero.value = "";
  inputAno.value = "";
  inputNome.focus();
}

function exibirMensagem(texto, sucesso) {
  mensagemValidacao.textContent = texto;
  mensagemValidacao.className = sucesso
    ? "validation-message success"
    : "validation-message";
}