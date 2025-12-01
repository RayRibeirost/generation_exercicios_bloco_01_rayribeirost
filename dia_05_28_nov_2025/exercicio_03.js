"use strict";
import readline from "readline-sync";

let salarioBruto, adcNoturno, hrsExtras, descontos, salarioLiquido;

console.log("Cálculo de Salário líquido");

salarioBruto = readline.questionFloat("Digite o Salário Bruto: ");
adcNoturno = readline.questionFloat("Digite o Adicional Noturno: ");
hrsExtras = readline.questionFloat("Digite o total de horas extra: ");
descontos = readline.questionFloat("Digite os descontos: ");

salarioLiquido = salarioBruto + adcNoturno + (hrsExtras * 5) - descontos;

console.log(`Salário líquido do mês vigente: ${salarioLiquido.toFixed(2)}`);