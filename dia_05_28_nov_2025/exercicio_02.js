"use strict";
import readline from "readline-sync";

let nota01, nota02, nota03, nota04;

console.log("Precisamos saber quais foram as notas do aluno.");

nota01 = readline.questionFloat("Digite a primeira nota: ");
nota02 = readline.questionFloat("Digite a segunda nota: ");
nota03 = readline.questionFloat("Digite a terceira nota: ");
nota04 = readline.questionFloat("Digite a quarta nota: ");

mediaFinal = (nota01 + nota02 + nota03 + nota04) / 4;

console.log(`Média final: ${mediaFinal.toFixed(1)} | Situação: ${mediaFinal >= 7 ? "Aprovado" : "Reprovado"}`);

