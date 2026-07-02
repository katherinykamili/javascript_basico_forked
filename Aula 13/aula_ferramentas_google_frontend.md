# Aula – Ferramentas Google para Desenvolvedores Front-end

**Carga horária:** 4 horas  
**Público-alvo:** alunos iniciantes em Desenvolvimento Front-end  
**Formato:** aula prática com demonstração, inspeção, testes e pesquisa técnica  

---

## 1. Contexto da aula

Você foi contratado como **Desenvolvedor(a) Front-end Júnior** em uma empresa de tecnologia.

Sua primeira missão é analisar, melhorar e apresentar uma página web simples utilizando ferramentas do ecossistema Google que são muito usadas no mercado.

Durante esta aula, você irá aprender a utilizar:

- Google Chrome
- Chrome DevTools
- Console
- Elements
- Network
- Application
- Lighthouse
- PageSpeed Insights
- Google Fonts
- Material Symbols
- Material Design
- Google Search com operadores avançados
- Gemini ou Google AI Studio como apoio à pesquisa técnica

---

## 2. Objetivos da aula

Ao final da aula, o aluno deverá ser capaz de:

- Entender como ferramentas Google auxiliam no desenvolvimento Front-end.
- Inspecionar HTML e CSS pelo Chrome DevTools.
- Testar comandos JavaScript pelo Console.
- Analisar arquivos carregados pela aba Network.
- Avaliar performance, acessibilidade, boas práticas e SEO com Lighthouse.
- Entender a diferença entre Lighthouse e PageSpeed Insights.
- Utilizar Google Fonts e Material Symbols em uma página web.
- Organizar um projeto Front-end com pastas separadas para CSS e JavaScript.
- Utilizar pesquisa técnica com operadores avançados do Google.
- Produzir um pequeno relatório técnico de análise Front-end.

---

## 3. Organização da aula de 4 horas

| Tempo | Atividade |
|---|---|
| 30 min | Introdução ao papel do Front-end e ferramentas Google |
| 40 min | Estrutura do projeto HTML, CSS e JavaScript |
| 45 min | Google Chrome e Chrome DevTools |
| 35 min | Console, Elements, Network e Application |
| 35 min | Lighthouse e PageSpeed Insights |
| 25 min | Google Fonts, Material Symbols e Material Design |
| 20 min | Pesquisa técnica com Google Search e IA |
| 30 min | Desafio prático em grupo |

---

# PARTE 1 – Estrutura inicial do projeto

## 4. Estrutura de pastas

Crie uma pasta chamada `projeto-google-front-end`.

Dentro dela, organize os arquivos assim:

```text
projeto-google-front-end/
│
├── index.html
│
├── css/
│   └── style.css
│
└── js/
    └── script.js
```

Essa organização é muito comum em projetos Front-end simples.

- O arquivo `index.html` guarda a estrutura da página.
- A pasta `css` guarda os arquivos de estilo.
- A pasta `js` guarda os arquivos JavaScript.

---

## 5. Arquivo `index.html`

Crie o arquivo `index.html` na raiz do projeto.

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <meta name="description" content="Página prática para estudar ferramentas Google no desenvolvimento Front-end.">

    <title>Ferramentas Google para Front-end</title>

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">

    <!-- Material Symbols -->
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet">

    <!-- Arquivo CSS dentro da pasta css -->
    <link rel="stylesheet" href="css/style.css">
</head>
<body>

    <header class="cabecalho">
        <div class="container cabecalho-conteudo">
            <div>
                <h1>Ferramentas Google para Front-end</h1>
                <p>Aprendendo a analisar, testar e melhorar páginas web.</p>
            </div>

            <span class="material-symbols-outlined icone-topo" aria-hidden="true">
                code
            </span>
        </div>
    </header>

    <main class="container">

        <section class="hero">
            <h2>Você está no papel de um(a) Front-end Júnior</h2>
            <p>
                Sua missão é melhorar esta página utilizando Chrome DevTools,
                Lighthouse, PageSpeed Insights, Google Fonts e boas práticas de pesquisa.
            </p>

            <button class="botao" id="btnMensagem">
                Testar JavaScript
            </button>
        </section>

        <section class="cards" aria-label="Ferramentas estudadas">

            <article class="card">
                <span class="material-symbols-outlined" aria-hidden="true">travel_explore</span>
                <h3>Chrome DevTools</h3>
                <p>Inspecione HTML, CSS, JavaScript, rede, armazenamento e performance.</p>
            </article>

            <article class="card">
                <span class="material-symbols-outlined" aria-hidden="true">speed</span>
                <h3>Lighthouse</h3>
                <p>Analise performance, acessibilidade, SEO e boas práticas da página.</p>
            </article>

            <article class="card">
                <span class="material-symbols-outlined" aria-hidden="true">font_download</span>
                <h3>Google Fonts</h3>
                <p>Utilize fontes web de forma organizada e profissional.</p>
            </article>

        </section>

        <section class="formulario-area">
            <h2>Teste de formulário</h2>
            <p>Use esta área para analisar acessibilidade e comportamento no DevTools.</p>

            <form id="formContato">
                <label for="nome">Nome:</label>
                <input type="text" id="nome" name="nome" placeholder="Digite seu nome">

                <label for="email">E-mail:</label>
                <input type="email" id="email" name="email" placeholder="Digite seu e-mail">

                <button type="submit" class="botao botao-secundario">
                    Enviar
                </button>
            </form>

            <p id="resultadoFormulario" class="resultado"></p>
        </section>

    </main>

    <footer class="rodape">
        <p>Projeto desenvolvido para prática de ferramentas Google no Front-end.</p>
    </footer>

    <!-- Arquivo JavaScript dentro da pasta js -->
    <script src="js/script.js"></script>
</body>
</html>
```

### Explicação dos principais pontos do HTML

```html
<link rel="stylesheet" href="css/style.css">
```

Esse comando importa o CSS que está dentro da pasta `css`.

```html
<script src="js/script.js"></script>
```

Esse comando importa o JavaScript que está dentro da pasta `js`.

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

Esse comando ajuda a página a funcionar corretamente em celulares.

```html
<meta name="description" content="Página prática para estudar ferramentas Google no desenvolvimento Front-end.">
```

Esse comando contribui para SEO, pois descreve o conteúdo da página.

---

## 6. Arquivo `css/style.css`

Crie a pasta `css` e dentro dela o arquivo `style.css`.

```css
/* =====================================================
   VARIÁVEIS GLOBAIS
   As variáveis ficam no início para facilitar manutenção.
===================================================== */
:root {
    /* Cores principais */
    --cor-primaria: #1a73e8;
    --cor-primaria-escura: #0b57d0;
    --cor-secundaria: #34a853;

    /* Cores neutras */
    --cor-fundo: #f8fafd;
    --cor-superficie: #ffffff;
    --cor-texto: #202124;
    --cor-texto-suave: #5f6368;
    --cor-borda: #dadce0;

    /* Cores de apoio */
    --cor-sucesso: #188038;
    --cor-alerta: #fbbc04;
    --cor-erro: #d93025;

    /* Tipografia */
    --fonte-principal: "Roboto", Arial, sans-serif;
    --fonte-titulo: "Poppins", Arial, sans-serif;

    /* Tamanhos de fonte */
    --fonte-pequena: 0.875rem;
    --fonte-normal: 1rem;
    --fonte-media: 1.25rem;
    --fonte-grande: 2rem;
    --fonte-extra: 2.6rem;

    /* Espaçamentos */
    --espaco-1: 0.5rem;
    --espaco-2: 1rem;
    --espaco-3: 1.5rem;
    --espaco-4: 2rem;
    --espaco-5: 3rem;

    /* Bordas e sombras */
    --raio-borda: 16px;
    --sombra-card: 0 8px 24px rgba(60, 64, 67, 0.15);

    /* Transições */
    --transicao-padrao: 0.3s ease;
}

/* =====================================================
   RESET BÁSICO
===================================================== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: var(--fonte-principal);
    background-color: var(--cor-fundo);
    color: var(--cor-texto);
    line-height: 1.6;
}

/* =====================================================
   ELEMENTOS GERAIS
===================================================== */
img {
    max-width: 100%;
    display: block;
}

button,
input {
    font-family: inherit;
}

.container {
    width: min(1100px, 90%);
    margin: 0 auto;
}

/* =====================================================
   CABEÇALHO
===================================================== */
.cabecalho {
    background: linear-gradient(135deg, var(--cor-primaria), var(--cor-primaria-escura));
    color: white;
    padding: var(--espaco-4) 0;
}

.cabecalho-conteudo {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--espaco-2);
}

.cabecalho h1 {
    font-family: var(--fonte-titulo);
    font-size: var(--fonte-extra);
    margin-bottom: var(--espaco-1);
}

.cabecalho p {
    color: rgba(255, 255, 255, 0.9);
}

.icone-topo {
    font-size: 4rem;
}

/* =====================================================
   HERO
===================================================== */
.hero {
    background-color: var(--cor-superficie);
    margin-top: var(--espaco-4);
    padding: var(--espaco-4);
    border-radius: var(--raio-borda);
    box-shadow: var(--sombra-card);
}

.hero h2 {
    font-family: var(--fonte-titulo);
    font-size: var(--fonte-grande);
    margin-bottom: var(--espaco-2);
}

.hero p {
    color: var(--cor-texto-suave);
    margin-bottom: var(--espaco-3);
}

/* =====================================================
   BOTÕES
===================================================== */
.botao {
    background-color: var(--cor-primaria);
    color: white;
    border: none;
    padding: 0.9rem 1.4rem;
    border-radius: 999px;
    cursor: pointer;
    font-weight: 700;
    transition: var(--transicao-padrao);
}

.botao:hover {
    background-color: var(--cor-primaria-escura);
    transform: translateY(-2px);
}

.botao-secundario {
    background-color: var(--cor-secundaria);
    margin-top: var(--espaco-2);
}

.botao-secundario:hover {
    background-color: var(--cor-sucesso);
}

/* =====================================================
   CARDS
===================================================== */
.cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--espaco-3);
    margin: var(--espaco-4) 0;
}

.card {
    background-color: var(--cor-superficie);
    padding: var(--espaco-3);
    border-radius: var(--raio-borda);
    box-shadow: var(--sombra-card);
    transition: var(--transicao-padrao);
}

.card:hover {
    transform: translateY(-5px);
}

.card .material-symbols-outlined {
    color: var(--cor-primaria);
    font-size: 2.5rem;
    margin-bottom: var(--espaco-1);
}

.card h3 {
    font-family: var(--fonte-titulo);
    margin-bottom: var(--espaco-1);
}

.card p {
    color: var(--cor-texto-suave);
}

/* =====================================================
   FORMULÁRIO
===================================================== */
.formulario-area {
    background-color: var(--cor-superficie);
    padding: var(--espaco-4);
    border-radius: var(--raio-borda);
    box-shadow: var(--sombra-card);
    margin-bottom: var(--espaco-4);
}

.formulario-area h2 {
    font-family: var(--fonte-titulo);
    margin-bottom: var(--espaco-1);
}

form {
    display: flex;
    flex-direction: column;
    margin-top: var(--espaco-2);
}

label {
    font-weight: 700;
    margin-top: var(--espaco-2);
    margin-bottom: 0.25rem;
}

input {
    padding: 0.9rem;
    border: 1px solid var(--cor-borda);
    border-radius: 10px;
    font-size: var(--fonte-normal);
}

input:focus {
    outline: 3px solid rgba(26, 115, 232, 0.25);
    border-color: var(--cor-primaria);
}

.resultado {
    margin-top: var(--espaco-2);
    font-weight: 700;
    color: var(--cor-sucesso);
}

/* =====================================================
   RODAPÉ
===================================================== */
.rodape {
    text-align: center;
    padding: var(--espaco-3);
    background-color: var(--cor-texto);
    color: white;
}

/* =====================================================
   RESPONSIVIDADE
===================================================== */
@media (max-width: 768px) {
    .cabecalho-conteudo {
        flex-direction: column;
        text-align: center;
    }

    .cabecalho h1 {
        font-size: var(--fonte-grande);
    }

    .cards {
        grid-template-columns: 1fr;
    }

    .hero,
    .formulario-area {
        padding: var(--espaco-3);
    }
}
```

### Explicação do CSS

As variáveis foram colocadas no início com `:root`.

Exemplo:

```css
:root {
    --cor-primaria: #1a73e8;
    --fonte-principal: "Roboto", Arial, sans-serif;
    --espaco-2: 1rem;
}
```

Depois, em vez de repetir valores várias vezes, usamos:

```css
background-color: var(--cor-primaria);
font-family: var(--fonte-principal);
padding: var(--espaco-2);
```

Isso facilita muito a manutenção.

Se a empresa quiser trocar a cor principal do sistema, basta alterar uma linha:

```css
--cor-primaria: #1a73e8;
```

---

## 7. Arquivo `js/script.js`

Crie a pasta `js` e dentro dela o arquivo `script.js`.

```javascript
// =====================================================
// SELEÇÃO DE ELEMENTOS DO HTML
// =====================================================

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
```

### Explicação do JavaScript

```javascript
const btnMensagem = document.getElementById("btnMensagem");
```

Busca no HTML o elemento que possui o id `btnMensagem`.

```javascript
btnMensagem.addEventListener("click", function () {
```

Cria um evento. Quando o usuário clicar no botão, uma função será executada.

```javascript
console.log("Botão testado com sucesso!");
```

Envia uma mensagem para o Console do navegador.

```javascript
evento.preventDefault();
```

Impede que o formulário recarregue a página automaticamente.

---

# PARTE 2 – Ferramentas Google para Front-end

## 8. Google Chrome

O Google Chrome é o navegador mais usado por desenvolvedores Front-end para testar páginas web.

No mercado, ele é utilizado para:

- abrir projetos locais;
- testar responsividade;
- verificar compatibilidade;
- analisar erros;
- executar auditorias com Lighthouse;
- acessar DevTools.

### Passo a passo

1. Abra o projeto no navegador.
2. Se estiver usando Visual Studio Code, instale a extensão **Live Server**.
3. Clique com o botão direito no `index.html`.
4. Escolha **Open with Live Server**.
5. O navegador abrirá um endereço parecido com:

```text
http://127.0.0.1:5500/index.html
```

---

## 9. Chrome DevTools

O Chrome DevTools é o conjunto de ferramentas de desenvolvimento do Chrome.

### Como abrir

No Windows:

```text
F12
```

ou

```text
Ctrl + Shift + I
```

Também é possível clicar com o botão direito na página e escolher:

```text
Inspecionar
```

---

## 10. Aba Elements

A aba **Elements** permite visualizar e alterar temporariamente o HTML e o CSS da página.

### Quando usar no mercado?

- Ajustar layout.
- Testar cores.
- Corrigir espaçamentos.
- Verificar classes CSS.
- Entender a estrutura HTML de uma página.

### Passo a passo

1. Abra o DevTools.
2. Clique na aba **Elements**.
3. Clique no ícone de seleção.
4. Clique em um elemento da página.
5. Altere textos, classes ou estilos.

### Teste prático

No DevTools, selecione o título:

```html
<h1>Ferramentas Google para Front-end</h1>
```

Altere temporariamente para:

```html
<h1>Minha primeira análise Front-end</h1>
```

Importante: essa alteração não muda o arquivo original. Ela serve apenas para teste.

---

## 11. Aba Console

A aba **Console** mostra mensagens, erros e permite executar JavaScript.

### Quando usar no mercado?

- Identificar erros JavaScript.
- Testar comandos rápidos.
- Ver valores de variáveis.
- Depurar eventos.

### Passo a passo

1. Abra o DevTools.
2. Clique em **Console**.
3. Clique no botão **Testar JavaScript** da página.
4. Observe as mensagens exibidas.

### Comandos para testar no Console

```javascript
// Exibe uma mensagem simples
console.log("Olá, DevTools!");
```

```javascript
// Exibe um aviso
console.warn("Este é um aviso para teste.");
```

```javascript
// Exibe um erro
console.error("Este é um erro simulado.");
```

```javascript
// Mostra informações em formato de tabela
console.table([
    { nome: "Ana", area: "Front-end" },
    { nome: "Carlos", area: "Back-end" },
    { nome: "Marina", area: "UX" }
]);
```

---

## 12. Aba Network

A aba **Network** mostra tudo que a página carrega.

Exemplos:

- HTML
- CSS
- JavaScript
- imagens
- fontes
- APIs

### Quando usar no mercado?

- Descobrir arquivos lentos.
- Verificar se o CSS carregou corretamente.
- Verificar se o JavaScript foi encontrado.
- Analisar tamanho das imagens.
- Investigar erro 404.

### Passo a passo

1. Abra o DevTools.
2. Clique em **Network**.
3. Recarregue a página com `F5`.
4. Observe os arquivos carregados.
5. Procure por:
   - `index.html`
   - `style.css`
   - `script.js`
   - fontes do Google

### Erro comum

Se o caminho estiver errado assim:

```html
<link rel="stylesheet" href="style.css">
```

mas o arquivo está dentro da pasta `css`, o navegador não encontrará o arquivo.

O correto é:

```html
<link rel="stylesheet" href="css/style.css">
```

O mesmo vale para o JavaScript.

Errado:

```html
<script src="script.js"></script>
```

Correto:

```html
<script src="js/script.js"></script>
```

---

## 13. Aba Application

A aba **Application** permite analisar dados armazenados no navegador.

### Ela mostra:

- Local Storage
- Session Storage
- Cookies
- Cache
- Service Workers

### Quando usar no mercado?

- Verificar dados salvos no navegador.
- Testar login.
- Analisar tokens.
- Limpar cache.
- Ver cookies.

### Teste prático no Console

Digite no Console:

```javascript
// Salva uma informação no Local Storage
localStorage.setItem("curso", "Front-end");
```

Depois abra:

```text
Application > Local Storage
```

Você verá a chave `curso` com o valor `Front-end`.

Para remover:

```javascript
// Remove o item salvo
localStorage.removeItem("curso");
```

---

## 14. Lighthouse

O Lighthouse analisa a qualidade da página.

Ele avalia:

- Performance
- Accessibility
- Best Practices
- SEO

### Quando usar no mercado?

- Antes de publicar um site.
- Depois de alterar layout.
- Durante otimização de performance.
- Para gerar relatório técnico.

### Passo a passo

1. Abra o Chrome.
2. Abra o DevTools.
3. Clique na aba **Lighthouse**.
4. Escolha **Desktop** ou **Mobile**.
5. Marque as categorias desejadas.
6. Clique em **Analyze page load**.
7. Aguarde o relatório.

### O que observar?

- Performance abaixo de 50: página ruim.
- Performance entre 50 e 89: precisa melhorar.
- Performance entre 90 e 100: ótimo.

### Métricas importantes

| Métrica | O que significa |
|---|---|
| FCP | Tempo até o primeiro conteúdo aparecer |
| LCP | Tempo até o maior conteúdo aparecer |
| INP | Tempo de resposta após interação |
| CLS | Quanto a página pula durante o carregamento |
| TTFB | Tempo de resposta inicial do servidor |

---

## 15. PageSpeed Insights

O PageSpeed Insights analisa páginas publicadas na internet.

### Diferença entre Lighthouse e PageSpeed

| Ferramenta | Onde usa | Melhor para |
|---|---|---|
| Lighthouse | No Chrome DevTools | Testar durante o desenvolvimento |
| PageSpeed Insights | Site online | Avaliar página publicada |

### Passo a passo

1. Acesse o PageSpeed Insights.
2. Cole a URL de um site publicado.
3. Clique em **Analisar**.
4. Verifique os resultados de mobile e desktop.
5. Leia as oportunidades de melhoria.

### Quando usar no mercado?

- Para avaliar sites de clientes.
- Para medir SEO técnico.
- Para comparar antes e depois da otimização.
- Para criar relatórios de performance.

---

## 16. Google Fonts

Google Fonts permite utilizar fontes online em páginas web.

### Quando usar no mercado?

- Criar identidade visual.
- Melhorar aparência do site.
- Padronizar tipografia.
- Usar fontes profissionais sem instalar no computador.

### Passo a passo

1. Acesse Google Fonts.
2. Escolha uma fonte.
3. Selecione os pesos necessários.
4. Copie o link gerado.
5. Cole no `<head>` do HTML.
6. Use a fonte no CSS.

### Exemplo usado nesta aula

No HTML:

```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
```

No CSS:

```css
:root {
    --fonte-principal: "Roboto", Arial, sans-serif;
    --fonte-titulo: "Poppins", Arial, sans-serif;
}
```

Uso:

```css
body {
    font-family: var(--fonte-principal);
}

h1, h2, h3 {
    font-family: var(--fonte-titulo);
}
```

### Boa prática

Use poucos pesos de fonte.

Evite carregar muitas variações como:

```text
100, 200, 300, 400, 500, 600, 700, 800, 900
```

Quanto mais pesos, mais arquivos a página precisa carregar.

---

## 17. Material Symbols

Material Symbols é a biblioteca de ícones do Google.

### Quando usar no mercado?

- Criar interfaces modernas.
- Substituir imagens por ícones leves.
- Padronizar botões, menus e cards.

### Passo a passo

No HTML, importe a biblioteca:

```html
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet">
```

Depois use um ícone:

```html
<span class="material-symbols-outlined" aria-hidden="true">
    speed
</span>
```

No CSS, personalize:

```css
.material-symbols-outlined {
    font-size: 2rem;
    color: var(--cor-primaria);
}
```

### Atenção à acessibilidade

Se o ícone for apenas decorativo, use:

```html
aria-hidden="true"
```

Se o ícone tiver significado importante, adicione um texto explicativo próximo.

---

## 18. Material Design

Material Design é um sistema de design criado pelo Google.

Ele orienta a criação de interfaces com:

- cores;
- espaçamento;
- botões;
- cards;
- formulários;
- ícones;
- sombras;
- responsividade;
- acessibilidade.

### Quando usar no mercado?

- Criação de aplicativos web.
- Sistemas administrativos.
- Aplicações Android.
- Interfaces com padrão visual consistente.

### Exemplo aplicado nesta aula

O botão usa ideias de Material Design:

```css
.botao {
    background-color: var(--cor-primaria);
    color: white;
    border: none;
    padding: 0.9rem 1.4rem;
    border-radius: 999px;
    cursor: pointer;
    font-weight: 700;
    transition: var(--transicao-padrao);
}
```

O card também segue essa ideia:

```css
.card {
    background-color: var(--cor-superficie);
    padding: var(--espaco-3);
    border-radius: var(--raio-borda);
    box-shadow: var(--sombra-card);
}
```

---

## 19. Google Search para Desenvolvedores

Saber pesquisar é uma habilidade profissional.

### Pesquisa ruim

```text
erro javascript
```

### Pesquisa melhor

```text
TypeError Cannot read properties of null addEventListener JavaScript
```

### Operadores úteis

Pesquisar em um site específico:

```text
site:developer.mozilla.org flexbox gap
```

Pesquisar documentação do Google:

```text
site:developers.google.com lighthouse performance
```

Pesquisar frase exata:

```text
"Cannot read properties of null"
```

Excluir termo:

```text
javascript date -jquery
```

Pesquisar PDF:

```text
css grid filetype:pdf
```

Pesquisar conteúdo recente:

```text
CSS container queries after:2024
```

---

## 20. Gemini ou Google AI Studio como apoio

Ferramentas de IA podem ajudar o desenvolvedor, mas não devem substituir o raciocínio.

### Forma fraca de perguntar

```text
Faça um site bonito.
```

### Forma melhor

```text
Analise este CSS e explique como posso melhorar organização, responsividade e performance.
```

### Forma melhor ainda

```text
Estou estudando Front-end. Este botão não executa o evento de clique.
Analise o código abaixo e explique o erro de forma didática.
```

### Boa prática

Sempre valide a resposta da IA em fontes confiáveis, como:

- MDN Web Docs
- Google Developers
- documentação oficial da tecnologia
- Chrome Developers

---

# PARTE 3 – Desafio prático

## 21. Situação-problema

A empresa onde você trabalha recebeu uma página web simples.

Sua equipe precisa analisar a página e apresentar um relatório técnico com melhorias.

---

## 22. Atividades do grupo

Cada grupo deverá:

1. Abrir o projeto no Chrome.
2. Abrir o DevTools.
3. Analisar o HTML pela aba Elements.
4. Verificar o CSS pela aba Styles.
5. Executar testes no Console.
6. Verificar arquivos carregados na aba Network.
7. Conferir Local Storage na aba Application.
8. Executar o Lighthouse.
9. Registrar as notas obtidas.
10. Pesquisar soluções para melhorar a página.
11. Apresentar as conclusões.

---

## 23. Roteiro de pesquisa dos alunos

Cada grupo deverá escolher uma ferramenta:

- Chrome DevTools
- Lighthouse
- PageSpeed Insights
- Google Fonts
- Material Symbols
- Material Design
- Google Search para desenvolvedores
- Gemini ou Google AI Studio

Depois, responder:

### Fase 1 – Identificação

1. Qual ferramenta foi escolhida?
2. Quem mantém essa ferramenta?
3. Qual problema ela resolve?

### Fase 2 – Uso no mercado

4. Em que momento do desenvolvimento Front-end ela é utilizada?
5. Que tipo de profissional utiliza essa ferramenta?
6. Cite uma situação real de uso em uma empresa.

### Fase 3 – Demonstração prática

7. Como acessar ou instalar a ferramenta?
8. Faça um passo a passo de uso.
9. Mostre um exemplo prático com a página da aula.

### Fase 4 – Análise crítica

10. Quais são as vantagens?
11. Quais são as limitações?
12. Existe alguma ferramenta concorrente?

### Fase 5 – Apresentação

13. O que o grupo aprendeu?
14. Como essa ferramenta ajuda um desenvolvedor Front-end?
15. Em qual projeto real vocês usariam essa ferramenta?

---

## 24. Modelo de relatório técnico

```markdown
# Relatório Técnico – Análise Front-end

## Nome do grupo

Integrantes:

## Ferramenta analisada

Nome da ferramenta:

## Objetivo da ferramenta

Explique para que serve.

## Como é utilizada no mercado

Descreva um exemplo real de uso profissional.

## Demonstração realizada

Explique o passo a passo realizado pelo grupo.

## Problemas encontrados na página

Liste os problemas identificados.

## Melhorias sugeridas

Liste as melhorias propostas.

## Resultado do Lighthouse

Performance:
Accessibility:
Best Practices:
SEO:

## Conclusão

Explique o que o grupo aprendeu.
```

---

## 25. Critérios de avaliação

| Critério | Pontuação |
|---|---:|
| Organização do projeto | 20 |
| Uso correto das ferramentas | 20 |
| Pesquisa técnica | 20 |
| Demonstração prática | 20 |
| Apresentação e conclusão | 20 |

**Total:** 100 pontos

---

## 26. Encerramento

Um bom desenvolvedor Front-end não apenas escreve HTML, CSS e JavaScript.

Ele também sabe:

- testar;
- inspecionar;
- pesquisar;
- corrigir;
- medir performance;
- pensar em acessibilidade;
- melhorar a experiência do usuário.

As ferramentas Google ajudam o profissional a transformar uma página simples em uma aplicação mais rápida, acessível e profissional.

