import readline from "readline-sync";

const numSet: Set<number> = new Set<number>([2, 5, 1, 3, 4, 9, 7, 8, 10, 6]);
let numInput: number = readline.questionInt("Digite o número que você deseja encontrar: ");
let indexFounded: boolean = numSet.has(numInput);
console.log(`O número ${numInput} ${indexFounded ? "foi encontrado!" : "não foi encontrado!"}`);