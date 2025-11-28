"use strict";
import readline from 'readline-sync';

/// Exercício 01

const salario = readline.questionFloat("Digite seu salário: ");
console.log(`Seu salário atual é R$ ${salario.toFixed(2)}`);

const abono = readline.questionFloat("Agora, digite o abono salarial: ");
console.log(`Seu abono salarial atual é R$ ${abono.toFixed(2)}`);

const novoSalario = salario + abono;
console.log(`Seu novo salário é de ${novoSalario.toFixed(2)}`);


/// Exercício 02

console.log("Preciasamos saber quais foram as notas do aluno.");
const nota01 = readline.questionFloat("Digite a primeira nota: ");
const nota02 = readline.questionFloat("Digite a segunda nota: ");
const nota03 = readline.questionFloat("Digite a terceira nota: ");
const nota04 = readline.questionFloat("Digite a quarta nota: ");
const mediaFinal = (nota01 + nota02 + nota03 + nota04) / 4;
console.log(`Média final: ${mediaFinal.toFixed(1)} | Situação: ${mediaFinal >= 7 ? "Aprovado" : "Reprovado"}`);