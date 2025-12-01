"use strict";
import readline from "readline-sync";

let salario, abono, novoSalario;

salario = readline.questionFloat("Digite seu salário : ");
console.log(`Seu salário atual é R$ ${salario.toFixed(2)}`);

abono = readline.questionFloat("Agora, digite o abono salarial: ");
console.log(`Seu abono salarial atual é R$ ${abono.toFixed(2)}`);

novoSalario = salario + abono;
console.log(`Seu novo salário é de ${novoSalario.toFixed(2)}`);12