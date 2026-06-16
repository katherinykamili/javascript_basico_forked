for (let i = 0; i < 5; i++) {
    console.log("Bom dia")
}

for (let i = 0; i < 5; index++) {
    soma = soma + 2
    console.log(soma);
}

for (let i = 0; i <= 15;  i++) {
    if(i % 2 == 0){
        continue
    } else {console.log("Número ímpar: "+ i)}
}

for (let i = 0; i <= 15;  i++) {
    if(i % 2 == 0){
        console.log("Número par: " + i)
    } else {console.log("Número ímpar: " + i)}
}

let opcao = "não"
while(opcao != "sim"){
    console.log("Olá, seja bem vindo!" + opcao)
    opcao = prompt("Quer parar? 'sim' - para - 'não' - continua")
}