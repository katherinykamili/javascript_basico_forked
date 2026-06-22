// Aula 5 · Prática

// 1 - Imprima números de 1 a 10 com for
// Instrução: Use o laço for para exibir os números de 1 a 10 no console.
// Dica: for (let i = 1; i <= 10; i++) { }

for (let i = 1; i <= 10; i++) {
    console.log(i)
}

// Leitura do código: 
// "Para (começar com i = 1; enquanto i seja menor ou igual a 10; aumentar i de 1 em 1) {Mostrar o número i no console}"

// 2 - Escreva while que soma até 100
// Instrução: Use while para somar números de 1 até 100. Exiba o resultado final (que deve ser 5050).
// Dica: Acumule os valores em uma variável soma.

let soma = 0
let i = 1
while (i <= 100) {
    soma += i, i++;
}
console.log(soma);

// Leitura do código: 
// Crio uma caixa chamada soma e começo com 0. Crio outra caixa chamada i e começo com 1. Enquanto i seja menor ou igual a 100: Acho o valor de i na caixa soma; Aumento 1 no valor de i; Quando o loop termina, mostro o total da soma.

// 3- Use do...while para ler entrada
// Instrução: Simule um programa que pede uma senha e repete enquanto a senha estiver errada. Use do...while.
// Dica: do { } while (senha !== "1234");

let senha;
do {
    senha = "1234";
}
while (senha !== "1234");

console.log("Acesso liberado");
console.log(senha);

// Leitura do código:
// Crio uma caixa vazia chamada senha. Primeiro, entro no loop e coloque '1234' na caixa senha. Depois, verifico: 'senha ainda não é 1234?'. Se fosse verdadeiro, continuaria... mas como senha já é '1234', a condição é falsa e o loop termina na primeira volta. Mostra 'Acesso liberado' e o valor da senha.

// 4- Pare um loop com break
// Instrução: Crie um for de 1 a 10 mas pare (break) quando chegar no 5. Exiba apenas 1, 2, 3, 4.
// Dica: if (i === 5) break;

for (let i = 1; i <= 10; i++) {
    if (i === 5) break; // "Vou sair da lista agora, não leio mais nada". Termina o loop imediatamente.
    console.log(i)
}

// Leitura do código:
// Conta de 1 até 10. Para cada número: Se o número é 5, paro imediatamente o loop (break). Senão, mostro o número. O loop começa: mostra 1, 2, 3, 4... quando chega em 5, PARA.

// 5- Pule um número com continue
// Instrução: Crie um for de 1 a 5 que pule (continue) o número 3. Exiba: 1, 2, 4, 5.
// Dica: if (i === 3) continue;

for (let i = 1; i <= 5; i++) {
    if (i === 3) continue; //"Vou ignorar este item da lista, mas continuo lendo o resto". Pula só essa volta, continua o loop
    console.log(i)
}

// Leitura do código:
// Conta de 1 até 5. Para cada número: Se o número é 3, ignoro essa volta (continue) e passo direto para o próximo. Senão, mostro o número. (Mostra 1, 2... quando chega em 3, pula e vai para 4. Mostra 4, 5).

// 6- Crie uma tabuada com laço aninhado
// Instrução: Use dois for aninhados para criar a tabuada do 1 até o 3 (1x1 até 3x3).
// Dica: for externo = multiplicando, for interno = multiplicador.

for (let i = 1; i <= 3; i++) {
    for (let t = 1; t <= 3; t++) {
        console.log(i + "x" + t + "=" + (i * t));
    }
}

// Leitura do código:

// Dois contadores: i (o externo) começa em 1, vai até 3. t (o interno) começa em 1, vai até 3.
// É como ter 3 linhas (i = 1, 2, 3) e em cada linha 3 colunas (t = 1, 2, 3)."
// Para cada valor de i: contar de 1 até 3 com o contador interno (t)
// Para cada valor de t: Mostro a multiplicação: i x t = resultado
// Mostro a multiplicação: i x t = resultado. Parece uma tabuada completa!
// Visualização:
//        t = 1   t = 2   t = 3
//        ↓       ↓       ↓
// i = 1  1×1=1   1×2=2   1×3=3
// i = 2  2×1=2   2×2=4   2×3=6
// i = 3  3×1=3   3×2=6   3×3=9