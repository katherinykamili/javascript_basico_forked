//================================================
// SELEÇÃO DE ELEMENTOS DO HTML
// ===============================================

// Busca o botão pelo id btnMensagem
const btnMensagem = document.getElementById("btnMensagem");

// Busca o formulário pelo id formContato
const formContato = document.getElementById("formContato");

// Busca o parágrafo onde será exibido o resultado do formulário
const resultadoFormulario = document.getElementById("resultadoFormulario");

// =====================================================
// EVENTO DE CLIQUE NO BOTÃO
// =====================================================

btnMensagem.addEventListener("click", function () {
    // Exibe uma mensagem no navegador
    alert("Você clicou no botão! Agora abra o Console do DevTools.");

    // Exibe uma mensagem no Console do navegador
    console.log("Botão testado com sucesso!");

    // Exibe uma tabela no Console
    console.table([
        { ferramenta: "Chrome DevTools", uso: "Inspecionar páginas" },
        { ferramenta: "Lighthouse", uso: "Analisar qualidade da página" },
        { ferramenta: "PageSpeed Insights", uso: "Avaliar páginas publicadas" }
    ]);
});

// =====================================================
// EVENTO DE ENVIO DO FORMULÁRIO
// =====================================================

formContato.addEventListener("submit", function (evento) {
    // Impede que a página seja recarregada ao enviar o formulário
    evento.preventDefault();

    // Captura os valores digitados nos campos
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;

    // Verifica se algum campo está vazio
    if (nome === "" || email === "") {
        resultadoFormulario.textContent = "Preencha todos os campos.";
        resultadoFormulario.style.color = "#d93025";

        console.warn("Tentativa de envio com campos vazios.");
        return;
    }

    // Exibe uma mensagem na página
    resultadoFormulario.textContent = `Obrigado, ${nome}! Dados enviados com sucesso.`;
    resultadoFormulario.style.color = "#188038";

    // Exibe os dados no Console
    console.log("Dados do formulário:");
    console.log("Nome:", nome);
    console.log("E-mail:", email);
});