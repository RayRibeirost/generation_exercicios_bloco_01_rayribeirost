"use strict";
import readline from 'readline-sync';

/// Exercício 01

let salario, abono, novoSalario;

salario = readline.questionFloat("Digite seu salário : ");
console.log(`Seu salário atual é R$ ${salario.toFixed(2)}`);

abono = readline.questionFloat("Agora, digite o abono salarial: ");
console.log(`Seu abono salarial atual é R$ ${abono.toFixed(2)}`);

novoSalario = salario + abono;
console.log(`Seu novo salário é de ${novoSalario.toFixed(2)}`);

/// Exercício 02

let nota01, nota02, nota03, nota04;

console.log("Precisamos saber quais foram as notas do aluno.");

nota01 = readline.questionFloat("Digite a primeira nota: ");
nota02 = readline.questionFloat("Digite a segunda nota: ");
nota03 = readline.questionFloat("Digite a terceira nota: ");
nota04 = readline.questionFloat("Digite a quarta nota: ");

mediaFinal = (nota01 + nota02 + nota03 + nota04) / 4;

console.log(`Média final: ${mediaFinal.toFixed(1)} | Situação: ${mediaFinal >= 7 ? "Aprovado" : "Reprovado"}`);

/// Exercício 03

let salarioBruto, adcNoturno, hrsExtras, descontos, salarioLiquido;

console.log("Cálculo de Salário líquido");

salarioBruto = readline.questionFloat("Digite o Salário Bruto: ");
adcNoturno = readline.questionFloat("Digite o Adicional Noturno: ");
hrsExtras = readline.questionFloat("Digite o total de horas extra: ");
descontos = readline.questionFloat("Digite os descontos: ");

salarioLiquido = salarioBruto + adcNoturno + (hrsExtras * 5) - descontos;

console.log(`Salário líquido do mês vigente: ${salarioLiquido.toFixed(2)}`);

/// Exercício 04

let n01, n02, n03, n04, subDosProds;

n01 = readline.questionFloat("Digite o primeiro número: ");
n02 = readline.questionFloat("Digite o segundo número: ");
n03 = readline.questionFloat("Digite o terceiro número: ");
n04 = readline.questionFloat("Digite o quarto número: ");

subDosProds = (n01 * n02) - (n03 * n04);

console.log(`Diferença: ${subDosProds.toFixed(1)}`);
