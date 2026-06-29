// O JavaScript cria uma função. O botão chama a função quando é clicado. A função altera o texto do título.

function alterarTitulo() {
    document.getElementById("titulo").innerText = "Título alterado com JavaScript!";
}

// Evento onclick
// Quando o usuário clicar no botão, a função mostrarMensagem() será executada.

function mostrarMensagem() {
    alert("Você clicou no botão!");
}

// Capturando valores de campos input
// O JavaScript captura o valor do campo. O resultado aparece no parágrafo.

function mostrarNome() {
    let nome = document.getElementById("nome").value;
    document.getElementById("resultado").innerText = "Olá, " + nome + "!";
}

// Verificando maioridade
//Observe o uso de Number().
// Ele converte o valor digitado para número.
// Isso é importante porque valores de input normalmente chegam como texto.

function verificarIdade() {
    let idade = Number(document.getElementById("idade").value);
    if (idade >= 18) {
        document.getElementById("resultadoIdade").innerText = "Você é maior de idade.";
    } else {
        document.getElementById("resultadoIdade").innerText = "Você é menor de idade.";
    }
}

// Alterando imagens com DOM
// O JavaScript muda o caminho da imagem exibida.

function trocarImagem() {
    document.getElementById("imagem").src = "/Katheriny/exerc. resolvidos/aula 11/img/imgjs2.jpg";
}

// Mostrar e esconder elementos

function esconderTexto() {
    document.getElementById("texto").style.display = "none";
}

function mostrarTexto() {
    document.getElementById("texto").style.display = "block";
}

// Criando elementos com JavaScript

function criarParagrafo() {
    let novoParagrafo = document.createElement("p");
    novoParagrafo.innerText = "Este parágrafo foi criado com JavaScript.";

    document.getElementById("area").appendChild(novoParagrafo);
}

// Removendo elementos

function removerAviso() {
    document.getElementById("aviso").remove();
}

// Calculadora de IMC

 function calcularIMC() {
            let peso = Number(document.getElementById("peso").value);
            let altura = Number(document.getElementById("altura").value);

            let imc = peso / (altura * altura);

            document.getElementById("resultadoIMC").innerText = "Seu IMC é: " + imc.toFixed(2);
        }

// Lista de tarefas simples

function adicionarTarefa() {
    let textoTarefa = document.getElementById("tarefa").value;

    let item = document.createElement("li");
    item.innerText = textoTarefa;

    document.getElementById("lista").appendChild(item);

    document.getElementById("tarefa").value = "";
}

// Melhorando com botão de excluir

  function adicionarTarefa() {
            let textoTarefa = document.getElementById("tarefa").value;

            if (textoTarefa === "") {
                alert("Digite uma tarefa antes de adicionar.");
                return;
            }

            let item = document.createElement("li");
            item.innerText = textoTarefa + " ";

            let botaoExcluir = document.createElement("button");
            botaoExcluir.innerText = "Excluir";

            botaoExcluir.onclick = function() {
                item.remove();
            };

            item.appendChild(botaoExcluir);
            document.getElementById("lista").appendChild(item);

            document.getElementById("tarefa").value = "";
        }