"use strict";
import readline from "readline-sync";

let n01, n02, n03, n04, subDosProds;

n01 = readline.questionFloat("Digite o primeiro número: ");
n02 = readline.questionFloat("Digite o segundo número: ");
n03 = readline.questionFloat("Digite o terceiro número: ");
n04 = readline.questionFloat("Digite o quarto número: ");

subDosProds = (n01 * n02) - (n03 * n04);

console.log(`Diferença: ${subDosProds.toFixed(1)}`);
