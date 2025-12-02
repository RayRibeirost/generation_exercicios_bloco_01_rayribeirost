"use strict";
import readline from "readline-sync";

let gradesArr = [[], [], [], [], [], [], [], [], [], []], meanArr = []
let gradesSum = 0

for(let i = 0; i < 10; i++) {
    for(let j = 0; j < 4; j++) {
        gradesArr[i][j] = readline.questionFloat(`Digite a ${j+1} do aluno ${i+1}: `);
        if (j === 3) {
            for(const grade of gradesArr[i]) {
                gradesSum += grade;
            }
            meanArr[meanArr.length] = (gradesSum / 4).toFixed(1);
            gradesSum = 0;
        }
    }
}
console.log(...meanArr)