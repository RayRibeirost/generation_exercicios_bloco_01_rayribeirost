"use strict";
import readline from "readline-sync";

let num, sum = 0;

do {
    num = readline.questionInt("Digite um número: ");
    if (num > 0) sum += num;
} while(num !== 0);

console.log(`A soma dos números positivos é: ${sum}`);

