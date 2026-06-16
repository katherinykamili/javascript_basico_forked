//  23. Par ou ímpar em C
// Escreva um programa em C que receba um número inteiro e diga se ele é par ou ímpar.

// > Dica: utilize o operador `%`.

#include <stdio.h>

int main() {
    //Solicita o número ao usuário
    printf("Digite o número inteiro:");
    int numero;
    scanf("%d", &numero);

    //Verifica se o número é par ou ímpar
    if (numero % 2 == 0) {
        printf("O número %d é par.\n", numero);
    } else {
        printf("O número %d é ímpar.\n", numero);
    }   
}


