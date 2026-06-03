// Aula 4 · Prática

// 1 - Crie um sistema de notas (A, B, C)
let nota = 85;
if (nota >= 90) {
    console.log("Nota A");
} else if (nota >= 80) {
    console.log("Nota B");
} else {
    console.log("Nota C");
}
// Mostra a nota correspondente com base no valor da variável nota

// 2 - Use switch para dia da semana
let dia = 3;
switch (dia) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda");
        break;
    case 3:
        console.log("Terça");
        break;
    default:
        console.log("Dia inválido");
}
// Mostra o dia da semana referente ao número da variável dia, ou "Dia inválido" se não for de 1 a 3

// 3 - Resolva um problema com ternário
let temp = 30;
let clima = temp > 25 ? "Quente" : "Frio";
console.log(clima);
// Mostra "Quente" se a temperatura for maior que 25, caso contrário mostra "Frio"

//  4 - Combine if com &&
let maiorIdade = true;
let temCarteira = true;
if (maiorIdade && temCarteira) {
    console.log("Pode dirigir");
}
// Mostra "Pode dirigir" se as duas condições forem verdadeiras, caso contrário não mostra nada

// 5 - Verifique se um número está em um intervalo
let num = 15;
if (num >= 10 && num <= 20) {
    console.log("Dentro");
} else {
    console.log("Fora");
}
// Mostra "Dentro" se o número estiver entre 10 e 20, se não mostra "Fora"

// 6 - Reescreva if/else como switch
let cor = "Verde";
switch (cor) {
    case "Vermelho":
        console.log("Pare");
        break;
    case "Amarelo":
        console.log("Atenção");
        break;
    case "Verde":
        console.log("Siga");
        break;
    default:
        console.log("Cor inválida");
}
// Mostra a cor correspondente à cor do semáforo, ou "Cor inválida" se não for Vermelho, Amarelo ou Verde