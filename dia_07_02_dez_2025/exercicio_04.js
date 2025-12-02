"use strict";
import readline from "readline-sync";

let age, gender, itRole, ageSum = 0, continueResearch = true
let backendDevs = 0, womenFront = 0, menMobilePlus40 = 0, nonBinaryFullMinus30 = 0, peopleCounter = 0;

while(continueResearch) {
    age = readline.questionInt("Idade: ");
    gender = readline.questionInt("Identidade de gênero: ");
    itRole = readline.questionInt("Pessoa desenvolvedora: ");
    if ((age >= 18 && age <= 100) && (gender >= 1 && gender <= 6) && (itRole >= 1 && itRole <= 4)) {peopleCounter++} 
    else {throw new Error("Informações inválidas!");}
    if (itRole === 1) {backendDevs++;}
    if ((gender === 1 || gender === 4) && itRole === 2) {womenFront++;}
    if (age > 40 && (gender === 2 || gender === 5) && itRole === 3) {menMobilePlus40++;}
    if (age < 30 && gender === 3 && itRole === 4) {nonBinaryFullMinus30++;}
    ageSum += age;
    continueResearch = readline.keyInYNStrict("Deseja continuar? ");
}

console.log(`Total de pessoas desenvolvedoras Backend: ${backendDevs}`);
console.log(`Total de mulheres Cis e Trans desenvolvedores Frontend: ${womenFront}`);
console.log(`Total de homens Cis e Trans desenvolvedores Mobile maiores de 40 anos: ${menMobilePlus40}`);
console.log(`Total de Pessoas Não Binárias desenvolvedoras FullStack menores de 30 anos: ${nonBinaryFullMinus30}`);
console.log(`O número total de pessoas que responderam à pesquisa: ${peopleCounter}`);
console.log(`A média de idade das pessoas que responderam à pesquisa: ${(ageSum / peopleCounter).toFixed(2)}`);