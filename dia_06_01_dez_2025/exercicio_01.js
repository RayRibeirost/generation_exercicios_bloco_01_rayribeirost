"use strict";
import readline, { question } from "readline-sync";

let numA, numB, numC, soma, resultado, sinal;
numA = readline.questionInt("Digite o número A: ");
numB = readline.questionInt("Digite o número B: ");
numC = readline.questionInt("Digite o número C: ");
soma = numA + numB;
if (soma === numC) {
  sinal = "=";
  resultado = "Igual a";
} else if (soma > numC) {
  sinal = ">";
  resultado = "Maior do que";
} else {
  sinal = "<";
  resultado = "Menor do que";
}

console.log(`${numA} + ${numB} = ${soma} ${sinal} ${numC}`);
console.log(`A Soma de A + B é ${resultado} C`);
