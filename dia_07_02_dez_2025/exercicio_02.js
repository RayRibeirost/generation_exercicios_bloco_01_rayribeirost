"use strict";
import readline from "readline-sync";

let num, evenCt, oddCt;
evenCt = 0;
oddCt = 0;

for (let i = 0; i < 10; i++) {
    num = readline.questionInt(`Digite o ${i + 1} número: `);
    num % 2 === 0 ? evenCt++ : oddCt++;
};

console.log(`Total de números pares: ${evenCt}`);
console.log(`Total de números ímpares: ${oddCt}`);

