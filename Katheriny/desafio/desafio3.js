// Você é um Robô em uma missão de análise. Precisa processar dados usando operadores matemáticos e lógicos. Complete os 4 requisitos para ativar o processador principal.

// 1 - Soma de duas variáveis
let a = 10;
let b = 3;
let soma = a + b;
console.log(soma);
// Mostra o resultado da soma de a e b

// 2 - Verificar se o numero é maior ou igual a outro
let comparacao = a >= b;
console.log(comparacao);
// Mostra o resultado da comparação

// 3 - Verifique se duas condições são verdadeiras ao mesmo tempo
let condicao1 = a > b;
let condicao2 = a < 15;
let resultado = condicao1 && condicao2;
console.log(resultado);
// Mostra o resultado da verificação das duas condições

// 4 - Use o operador ternário para decidir entre dois valores e exiba o resultado
let valor = a > b ? "Maior": "Menor";
console.log(valor);
// Mostra "Maior" se a for maior que b, se não mostra "Menor"