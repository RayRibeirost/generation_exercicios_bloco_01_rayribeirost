"use strict";
import readline from "readline-sync";

let numA, numB

numA = readline.questionInt("Digite o primeiro número do intervalo: ");
numB = readline.questionInt("Digite o segundo número do intervalo: ");

if (numB <= numA) {
    console.log("Intervalo inválido!")
} else {
    for(let i = numA; i <= numB; i++) {
        if (i % 3 === 0 && i % 5 === 0) console.log(`${i} é múltiplo de 3 e 5`);
    }
}

