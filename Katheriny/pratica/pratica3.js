// Aula 3 · Prática

// 1 - Calcule a média de três notas
let n1 = 8;
let n2 = 7;
let n3 = 9;
let media = (n1 = n2 + n3) / 3;
console.log(media);

// 2 - Verifique se um número é par ou ímpar
let numero = 7;
let resto = numero % 2;
let resultado = resto === 0;
console.log(resultado);

// 3 - Combine duas condições com &&
let maiorIdade = true;
let temIngresso = true;
let podeEntrar = maiorIdade && temIngresso;
console.log(podeEntrar);

// 4 - Use || para verificar se uma variável é válida
let nome = "";
let usuario = nome || "Visitante";
console.log(usuario);

// 5 - Escreva expressão com operador ternário
let temperatura = 30;
let clima = temperatura > 25 ? "Quente" : "Frio";
console.log(clima);

// 6 - Analise precedência em uma expressão complexa
let semParenteses = 5 + 3 * 2;
let comParenteses = (5 + 3) * 2;
console.log(semParenteses, comParenteses);