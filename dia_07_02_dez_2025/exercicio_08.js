"use strict";
import readline from "readline-sync";

let num, sum = 0, arr = [], oddIndexArr = [], evenElArr = []; 


console.log("Primeiro, insira 10 números");

for(let i = 0; i < 10; i++) {
    num = readline.questionInt(`Digite o ${i + 1} número: `);
    arr[i] = num;
}

for(let i = 0; i < 10; i++) {
    if (i % 2 !== 0) oddIndexArr[oddIndexArr.length] = arr[i];
    if (arr[i] % 2 === 0) evenElArr[evenElArr.length] = arr[i];
    sum += arr[i]
}

console.log("Elementos nos índices ímpares: ");
console.log(...oddIndexArr);
console.log("Elementos pares:");
console.log(...evenElArr)
console.log(`Soma: ${sum}`);
console.log(`Média: ${(sum / arr.length).toFixed(2)}`);
