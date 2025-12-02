"use strict";
import readline from "readline-sync";

let age, minus21ct, plus50ct;

age = 0;
minus21ct = 0;
plus50ct = 0;

while(age >= 0) {
    age = readline.questionInt("Digite uma idade: ");
    if (age >= 0 && age < 21) minus21ct++;
    if (age > 50) plus50ct++;
};

console.log(`Total de pessoas menores de 21 anos: ${minus21ct}`);
console.log(`Total de pessoas maiores de 50 anoes: ${plus50ct}`);
