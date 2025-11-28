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

console.log("Precisamos saber quais foram as notas do aluno.");
const nota01 = readline.questionFloat("Digite a primeira nota: ");
const nota02 = readline.questionFloat("Digite a segunda nota: ");
const nota03 = readline.questionFloat("Digite a terceira nota: ");
const nota04 = readline.questionFloat("Digite a quarta nota: ");
const mediaFinal = (nota01 + nota02 + nota03 + nota04) / 4;
console.log(`Média final: ${mediaFinal.toFixed(1)} | Situação: ${mediaFinal >= 7 ? "Aprovado" : "Reprovado"}`);

/// Exercício 03

console.log("Cálculo de Salário líquido");
const salarioBruto = readline.questionFloat("Digite o Salário Bruto: ");
const adcNoturno = readline.questionFloat("Digite o Adicional Noturno: ");
const hrsExtras = readline.questionFloat("Digite o total de horas extra: ");
const descontos = readline.questionFloat("Digite os descontos: ");
const salarioLiquido = salarioBruto + adcNoturno + (hrsExtras * 5) - descontos;
console.log(`Salário líquido do mês vigente: ${salarioLiquido.toFixed(2)}`);

/// Exercício 04

const n01 = readline.questionFloat("Digite o primeiro número: ");
const n02 = readline.questionFloat("Digite o segundo número: ");
const n03 = readline.questionFloat("Digite o terceiro número: ");
const n04 = readline.questionFloat("Digite o quarto número: ");
const subDosProds = (n01 * n02) - (n03 * n04);
console.log(`Diferença: ${subDosProds.toFixed(1)}`);
