// Você é um Robô em uma missão de tomada de decisões. Precisa analisar situações e escolher o caminho correto usando estruturas de decisão. Complete os 4 requisitos para ativar o módulo de decisão

// 1 - Use uma variável com idade e use if/else para decidir se é maior de idade ou não
let idade = 16;
if (idade >= 18) {
    console.log("Maior");
} else {
    console.log("Menor");
}
// Mostra "Maior" se a idade for 18 ou mais, se não mostra "Menor"

// 2 - Use um switch que classifique um número de 1 a 3 como "Baixo", "Médio" ou "Alto"
let numero = 2;
switch (numero) {
    case 1:
        console.log("Baixo");
        break;
    case 2:
        console.log("Médio");
        break;
    case 3:
        console.log("Alto");
        break;
}
// Mostra se o numero é "Baixo", "Médio" ou "Alto" com base no valor da variável numero

// 3 - Use operador ternário para verificar se um número é positivo ou negativo
let num = -7;
let resultado = num >= 0 ? "Positivo" : "Negativo";
console.log(resultado);
// Mostra "Positivo" se o número for zero ou maior, caso contrário mostra "Negativo"

// 4 -  Use if com && para verificar se uma pessoa pode votar (idade >= 16 E nacionalidade brasileira)
let idadeVoto = 16;
let nacionalidade = "Brasileiro";
if (idadeVoto >= 16 && nacionalidade === "Brasileiro") {
    console.log("Pode votar");
} else { console.log("Não pode votar"); }
// Mostra "Pode votar" se a pessoa tiver 16 anos ou mais e for brasileira, caso contrário mostra "Não pode votar"