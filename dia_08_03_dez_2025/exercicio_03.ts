import readline from "readline-sync";

let numSet: Set<number> = new Set<number>();
let numInput: number;

for(let i: number = 0; i < 10; i++) {
    numInput = readline.questionInt(`Digite o ${i + 1} número: `);
    numSet.add(numInput);
}

console.log("Listando dados do Set:");
console.log(...numSet);