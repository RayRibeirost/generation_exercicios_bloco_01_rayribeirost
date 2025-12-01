"use strict";
import readline, { question } from "readline-sync";


let numA, numB, operacao, saida

numA = readline.questionFloat("Digite o primeiro número: ");
numB = readline.questionFloat("Digite o segundo número: ");
operacao = readline.questionInt("Digite o número da operação (1-soma, 2-subtração, 3-multiplicação, 4-divisão): ");

switch (operacao) {
    case 1:
        saida = `${numA} + ${numB} = ${numA + numB}`;
        break;
    case 2:
        saida = `${numA} - ${numB} = ${numA - numB}`;
        break;
    case 3:
        saida = `${numA} * ${numB} = ${numA * numB}`;
        break;
    case 4:
        saida = `${numA} / ${numB} = ${numA / numB}`;
        break;
    default:
        saida = "Operação inválida!"

}

console.log(saida);