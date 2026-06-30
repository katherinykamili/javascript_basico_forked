const inputNome = document.getElementById("nome");
const inputGenero = document.getElementById("genero");
const inputAno = document.getElementById("ano");
const botaoCadastrar = document.getElementById("botaoCadastrar");
const botaoTema = document.getElementById("botaoTema");
const listaFilmes = document.getElementById("listaFilmes");
const mensagemValidacao = document.getElementById("mensagemValidacao");
const contador = document.getElementById("contador");

let filmes = JSON.parse(localStorage.getItem("filmes") || "[]");

function salvarFilmes() {
  localStorage.setItem("filmes", JSON.stringify(filmes));
}


function alternarTema() {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        botaoTema.textContent = "☀️ Modo Claro";
        localStorage.setItem("tema", "dark");
    } else {
        botaoTema.textContent = "🌙 Modo Escuro";
        localStorage.setItem("tema", "light");
    }
}

function atualizarContador() {
  contador.textContent = filmes.length;
}

function exibirMensagem(texto, sucesso) {
  mensagemValidacao.innerHTML = "";
  const msg = document.createElement("div");
  msg.className = sucesso ? "validation-message success" : "validation-message";
  msg.textContent = texto;
  mensagemValidacao.appendChild(msg);
  setTimeout(() => msg.remove(), 3000);
}

function limparFormulario() {
  inputNome.value = "";
  inputGenero.value = "";
  inputAno.value = "";
  inputNome.focus();
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
    vazio.className = "empty-state";
    vazio.innerHTML = `<div class="emoji">🎬</div><p>Nenhum filme cadastrado ainda. Comece adicionando seus filmes favoritos!</p>`;
    listaFilmes.appendChild(vazio);
    return;
  }

  filmes.forEach((filme) => {
    const card = document.createElement("div");
    card.className = "filme";
    card.innerHTML = `
      <h3>${filme.nome}</h3>
      <div class="filme-info">
        <div class="info-row"><span>Gênero:</span> <strong>${filme.genero}</strong></div>
        <div class="info-row"><span>Ano:</span> <strong>${filme.ano}</strong></div>
      </div>
      <button class="btn-excluir" type="button">Excluir</button>
    `;
    card.querySelector(".btn-excluir").addEventListener("click", () => excluirFilme(filme.id));
    listaFilmes.appendChild(card);
  });
}

function cadastrarFilme() {
  const nome = inputNome.value.trim();
  const genero = inputGenero.value;
  const ano = inputAno.value.trim();

  if (!nome || !genero || !ano) return exibirMensagem("Preencha todos os campos!", false);

  const anoNum = Number(ano);
  if (Number.isNaN(anoNum) || anoNum < 1900 || anoNum > 2100) {
    return exibirMensagem("Digite um ano válido (1900-2100)!", false);
  }

  filmes.push({ id: Date.now(), nome, genero, ano: anoNum });
  salvarFilmes();
  atualizarListaFilmes();
  atualizarContador();
  limparFormulario();
  exibirMensagem("Filme cadastrado com sucesso!", true);
}

document.addEventListener("DOMContentLoaded", () => {
  carregarTema();
  atualizarListaFilmes();
  atualizarContador();
});

botaoCadastrar.addEventListener("click", cadastrarFilme);
botaoTema.addEventListener("click", alternarTema);
inputAno.addEventListener("keyup", (e) => {
  if (e.key === "Enter") cadastrarFilme();
});