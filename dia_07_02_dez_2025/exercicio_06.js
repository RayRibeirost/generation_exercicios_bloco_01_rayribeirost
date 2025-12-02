"use strict";
import readline from "readline-sync";

let num, sum = 0, counter = 0;

do {
    num = readline.questionInt("Digite um número: ");
    if (num % 3 === 0 && num !== 0) {
        counter++;
        sum += num;
    }
} while(num !== 0);

console.log(`A média de todos os números múltiplos de 3 é: ${(sum / counter).toFixed(2)}`);