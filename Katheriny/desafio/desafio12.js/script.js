/* SISTEMA DE CADASTRO DE FILMES */

/* VARIÁVEIS GLOBAIS */
let filmes = [];
const inputNome = document.getElementById("nome");
const inputGenero = document.getElementById("genero");
const inputAno = document.getElementById("ano");
const botaoCadastrar = document.getElementById("botaoCadastrar");
const listaFilmes = document.getElementById("listaFilmes");
const mensagemValidacao = document.getElementById("mensagemValidacao");
const contador = document.getElementById("contador");

/* INICIALIZAÇÃO - EVENT LISTENERS */
botaoCadastrar.addEventListener("click", function () {
    cadastrarFilme();
});

inputAno.addEventListener("keyup", function (evento) {
    if (evento.keyCode === 13) {
        cadastrarFilme();
    }
});

function cadastrarFilme() {
    const nome = inputNome.value.trim();
    const genero = inputGenero.value.trim();
    const ano = inputAno.value.trim();

    /* VALIDAÇÃO 1: Verifica se todos os campos foram preenchidos */

    if (nome === "" || genero === "" || ano === "") {
        exibirMensagem("Preencha todos os campos!", false);
        return;
    }

    /* VALIDAÇÃO 2: Verifica se o ano é válido */

    if (ano < 1900 || ano > 2100) {
        exibirMensagem("Digite um ano válido (1900-2100)!", false);
        return;
    }

    /* CRIAR OBJETO FILME */

    const filme = {
        id: Date.now(),
        nome: nome,
        genero: genero,
        ano: ano
    };

    /* ADICIONAR FILME AO ARRAY */

    filmes.push(filme); // push() adiciona um elemento no final do array.
    exibirMensagem("Filme cadastrado com sucesso! 🎉", true);
    limparFormulario();
    atualizarListaFilmes();
    atualizarContador();
}

/* === FUNÇÃO: EXCLUIR FILME === */

function excluirFilme(id) {
    const indice = filmes.findIndex(function (filme) {
        return filme.id === id;
    });

    if (indice !== -1) {  // Verifica se o filme foi encontrado (índice !== -1)
        filmes.splice(indice, 1);
        atualizarListaFilmes();
        atualizarContador();
    }
}

/* FUNÇÃO: ATUALIZAR LISTA DE FILMES */

function atualizarListaFilmes() {
    // innerHTML = "" limpa todo o conteúdo do elemento
    listaFilmes.innerHTML = "";
    /* VERIFICAÇÃO: Lista está vazia? */
    if (filmes.length === 0) {
        const emptyState = document.createElement("div");
        emptyState.classList.add("empty-state");
        emptyState.innerHTML = `
            <div class="emoji">🍿</div>
            <p>Nenhum filme cadastrado ainda. Comece adicionando seus filmes favoritos!</p>`;
        listaFilmes.appendChild(emptyState);
        return;
    }

    /* CRIAR CARD PARA CADA FILME */
    // forEach() percorre cada elemento do array
    filmes.forEach(function (filme) {
        criarCardFilme(filme);
    });
}

/* FUNÇÃO: CRIAR CARD DO FILME */

function criarCardFilme(filme) {
    const card = document.createElement("div");
    card.classList.add("filme");

    /* DEFINIR CONTEÚDO HTML DO CARD */

    card.innerHTML = `
        <!-- Título do filme com ícone de filme -->
        <h3>🎬 ${filme.nome}</h3>

        <!-- Container com informações adicionais -->
        <div class="filme-info">
            <!-- Linha com gênero -->
            <div class="info-row">
                <span>🎭</span>
                <strong>${filme.genero}</strong>
            </div>

            <!-- Linha com ano -->
            <div class="info-row">
                <span>📅</span>
                <strong>${filme.ano}</strong>
            </div>
        </div>

        <!-- Botão para excluir o filme -->
        <!-- onclick chama a função excluirFilme passando o id do filme -->
        <button class="btn-excluir" onclick="excluirFilme(${filme.id})">
            🗑️ Excluir
        </button>
    `;

    /* ADICIONAR CARD AO CONTAINER */
    // appendChild() adiciona um elemento filho ao final
    listaFilmes.appendChild(card);
}

/* FUNÇÃO: ATUALIZAR CONTADOR */

function atualizarContador() {
    contador.textContent = filmes.length;
    // textContent define o texto do elemento
    // filmes.length retorna a quantidade de filmes no array
}

/* FUNÇÃO: LIMPAR FORMULÁRIO */

function limparFormulario() {
    inputNome.value = "";
    inputGenero.value = "";
    inputAno.value = "";
    inputNome.focus();
    // focus() coloca o cursor no campo
    // Facilita o usuário adicionar outro filme
}

/* FUNÇÃO: EXIBIR MENSAGEM */

function exibirMensagem(texto, sucesso) {
    // Limpa mensagens anteriores
    mensagemValidacao.innerHTML = "";
    // Cria um novo elemento div para a mensagem
    const mensagem = document.createElement("div");
    mensagem.classList.add("validation-message");

    /* APLICAR ESTILO DE SUCESSO OU ERRO */
    if (sucesso) {
        mensagem.classList.add("success");
    }
    // Define o texto da mensagem
    mensagem.textContent = texto;
    mensagemValidacao.appendChild(mensagem);

    /* REMOVER MENSAGEM AUTOMATICAMENTE */
    // setTimeout() executa código após um tempo
    setTimeout(function () {
        if (mensagem.parentNode) {
            mensagem.remove();
        }
    }, 4000);
}

