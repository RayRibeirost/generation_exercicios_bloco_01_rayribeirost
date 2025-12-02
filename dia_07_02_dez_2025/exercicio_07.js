"use strict";
import readline from "readline-sync";

let num, index;
const arr = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];

num = readline.questionInt("Digite o número que você deseja encontrar: ");

for (let i = 0; i < arr.length; i++) {
    if (num === arr[i]) {
        index = i;
        break;
    };
}

console.log(index ? `O número ${num} está localizado na posição: ${index}` : `O número ${num} não foi encontrado!`);