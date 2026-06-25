const nomeFilme = document.getElementById("nomeFilme");
const genero = document.getElementById("genero")
// Define o ano atual automaticamente no input
document.getElementById('ano').value = new Date().getFullYear();
const btnCadastrar = document.getElementById("btnCadastrar");
const btnModo = document.getElementById("btnModo");
const mensagem = document.getElementById("mensagem");
const listaFilmes = document.getElementById("listaFilmes");
const contador = document.getElementById("contador");

let totalFilmes = 0;

function atualizarContador() {
  contador.textContent = `Filmes cadastrados: ${totalFilmes}`;
}

if (nomeFilme.value === "" || genero.value === "" || ano.value === "") {
  mensagem.textContent = "Preencha todos os campos!";
  mensagem.classList.add("erro");
  return;
}

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

const card = document.createElement("div");
card.classList.add("filme");

const titulo = document.createElement("h3");
titulo.textContent = `🎬 ${nomeFilme.value}`;

const generoTexto = document.createElement("p");
generoTexto.textContent = `🎭 ${genero.value}`;

const anoTexto = document.createElement("p");
anoTexto.textContent = `📅 ${ano.value}`;

const btnExcluir = document.createElement("button");
btnExcluir.textContent = "Excluir";

card.appendChild(titulo);
card.appendChild(generoTexto);
card.appendChild(anoTexto);
card.appendChild(btnExcluir);

listaFilmes.appendChild(card);

btnExcluir.addEventListener("click", function () {
  card.remove();
  totalFilmes--;
  atualizarContador();
});

btnCadastrar.addEventListener("click", function () {
  if (nomeFilme.value === "" || genero.value === "" || ano.value === "") {
    mensagem.textContent = "Preencha todos os campos!";
    mensagem.classList.add("erro");
    return;
  }

  mensagem.textContent = "";

  const card = document.createElement("div");
  card.classList.add("filme");

  const titulo = document.createElement("h3");
  titulo.textContent = `🎬 ${nomeFilme.value}`;

  const generoTexto = document.createElement("p");
  generoTexto.textContent = `🎭 ${genero.value}`;

  const anoTexto = document.createElement("p");
  anoTexto.textContent = `📅 ${ano.value}`;

  const btnExcluir = document.createElement("button");
  btnExcluir.textContent = "Excluir";

  btnExcluir.addEventListener("click", function () {
    card.remove();
    totalFilmes--;
    atualizarContador();
  });

  card.appendChild(titulo);
  card.appendChild(generoTexto);
  card.appendChild(anoTexto);
  card.appendChild(btnExcluir);

  listaFilmes.appendChild(card);

  totalFilmes++;
  atualizarContador();

  nomeFilme.value = "";
  genero.value = "";
  ano.value = "";
});

btnModo.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});
