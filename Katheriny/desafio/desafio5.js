// Você é um Robô em uma missão de processamento em lote. Precisa repetir tarefas automaticamente usando laços de repetição. Complete os 4 requisitos para ativar o processador em lote.

// 1- Laço for: Crie um for que exiba números pares de 2 a 10

for (let i = 2; i <= 10; i++){
    if (i % 2 === 0) { // Se i é divisível por 2 (é par)
        continue;
    }
    console.log(i)
}

// Leitura do código:
// ontar de 2 até 10. Para cada número, verifico se é par (i % 2 === 0). Se é par, mostro. Se não é, ignoro.

// 2- Laço while: Use while para contar regressivamente de 5 a 1

let i = 5;
while (i >= 1) {
    console.log(i);
    i--;
}

// Leitura do código:
//Crio uma variável i e começo com 5. Enquanto i seja maior ou igual a 1: Mostro o número atual. Diminuo 1 no valor de i. Quando i fica 0, o loop termina.

// 3- Break: Crie um for de 1 a 20 que pare ao encontrar um número divisível por 7

for (let i = 1; i <= 20; i++) {
    if (i % 7 === 0) break;
    console.log(i)
}

// Leitura do código:
// Começa em 1, mostrar os números, e quando chegar no primeiro múltiplo de 7, para tudo.

// 4- Laço aninhado: Use dois for para gerar pares (i, j) de 1 a 3

for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++)
        console.log(i, j);
}

// Leitura do código:
// Conta de 1 até 3 com o contador externo i. Para cada valor de i, vou contar de 1 até 3 com o contador interno j. Para cada combinação, mostro o par (i, j).