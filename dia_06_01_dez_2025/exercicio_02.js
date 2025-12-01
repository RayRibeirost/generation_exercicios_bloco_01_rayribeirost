"use strict";
import readline, { question } from "readline-sync";


let num;
num = readline.questionInt("Digite um número: ");
console.log(`O Número ${num} é ${num % 2 === 0 ? "par" : "ímpar"} e ${num > 0 ? "positivo" : "negativo"}!`);