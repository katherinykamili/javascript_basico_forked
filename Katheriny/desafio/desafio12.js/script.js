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


botaoCadastrar.addEventListener("click", function() {
    cadastrarFilme();
});

inputAno.addEventListener("keyup", function(evento) {
    if (evento.keyCode === 13) {
        cadastrarFilme();
    }
});

function cadastrarFilme() {
    const nome = inputNome.value.trim();
    const genero = inputGenero.value.trim();
    const ano = inputAno.value.trim();
    if (nome === "" || genero === "" || ano === "") {
        exibirMensagem("Preencha todos os campos!", false);
        return;
    }
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

    filmes.push(filme);
    exibirMensagem("Filme cadastrado com sucesso! 🎉", true);
    limparFormulario();
    atualizarListaFilmes();
    atualizarContador();
}


function excluirFilme(id) {
    const indice = filmes.findIndex(function(filme) {
        return filme.id === id;
    });

    if (indice !== -1) {
        filmes.splice(indice, 1);
        atualizarListaFilmes();
        atualizarContador();
    }
}

/* FUNÇÃO: ATUALIZAR LISTA DE FILMES */

function atualizarListaFilmes() {
    listaFilmes.innerHTML = "";
    if (filmes.length === 0) {
        const emptyState = document.createElement("div");
        emptyState.classList.add("empty-state");
        emptyState.innerHTML = `
            <div class="emoji">🍿</div>
            <p>Nenhum filme cadastrado ainda. Comece adicionando seus filmes favoritos!</p>
        `;
        listaFilmes.appendChild(emptyState);
        return;
    }

    /* CRIAR CARD PARA CADA FILME */
    
    filmes.forEach(function(filme) {
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

    listaFilmes.appendChild(card);
}

/* FUNÇÃO: ATUALIZAR CONTADOR */

function atualizarContador() {
    contador.textContent = filmes.length;
}

/* FUNÇÃO: LIMPAR FORMULÁRIO */

function limparFormulario() {
    inputNome.value = "";
    inputGenero.value = "";
    inputAno.value = "";
    inputNome.focus();
}

/* FUNÇÃO: EXIBIR MENSAGEM */

function exibirMensagem(texto, sucesso) {
    mensagemValidacao.innerHTML = "";
    const mensagem = document.createElement("div");
    mensagem.classList.add("validation-message");

    /* APLICAR ESTILO DE SUCESSO OU ERRO */
    if (sucesso) {
        mensagem.classList.add("success");
    }

    mensagem.textContent = texto;
    mensagemValidacao.appendChild(mensagem);

    /* REMOVER MENSAGEM AUTOMATICAMENTE */
   
    setTimeout(function() {
        if (mensagem.parentNode) {
            mensagem.remove();
        }
    }, 4000);
}

