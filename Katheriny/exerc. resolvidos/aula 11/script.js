
function alterarTitulo() {
    document.getElementById("titulo").innerText = "Título alterado com JavaScript!";
}

function mostrarMensagem() {
    alert("Você clicou no botão!");
}

function mostrarNome() {
    let nome = document.getElementById("nome").value;
    document.getElementById("resultado").innerText = "Olá, " + nome + "!";
}

function verificarIdade() {
    let idade = Number(document.getElementById("idade").value);
    if (idade >= 18) {
        document.getElementById("resultadoIdade").innerText = "Você é maior de idade.";
    } else {
        document.getElementById("resultadoIdade").innerText = "Você é menor de idade.";
    }
}

function trocarImagem() {
    document.getElementById("imagem").src = "/Katheriny/exerc. resolvidos/aula 11/img/imgjs2.jpg";
}