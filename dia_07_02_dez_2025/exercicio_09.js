"use strict";
import readline from "readline-sync";

let mainArr = [[], [], []], mainDiagArr = [], secDiagArr = []
let mainDiagSum = 0, secDiagSum = 0;

for(let i = 0; i < mainArr.length; i++) {
    for(let j = 0; j < 3; j++) {
        mainArr[i][j] = readline.questionInt(`Digite o ${j+1} número da linha ${i+1}: `);
        if (i === j) {
            mainDiagArr[mainDiagArr.length] = mainArr[i][j];
            mainDiagSum += mainArr[i][j];
        };
        if (i + j === 2) {
            secDiagArr[secDiagArr.length] = mainArr[i][j];
            secDiagSum += mainArr[i][j];
        }
    }
}

console.log("Elementos da Diagonal Principal:");
console.log(...mainDiagArr);

console.log("Elementos da Diagonal Secundária:");
console.log(...secDiagArr);

console.log("Soma dos elementos da diagonal principal:")
console.log(mainDiagSum);

console.log("Soma dos elementos da diagonal secundária:")
console.log(secDiagSum);
