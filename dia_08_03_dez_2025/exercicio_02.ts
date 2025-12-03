import readline from "readline-sync";

const numArr: Array<number> = new Array<number>(2, 5, 1, 3, 4, 9, 7, 8, 10, 6);
let numInput: number = readline.questionInt("Digite o número que você deseja encontrar: ");
let indexFounded: number = numArr.indexOf(numInput);
console.log(indexFounded === -1 ? `O número ${numInput} não foi encontrado!` : `O número ${numInput} está localizado na posição: ${indexFounded}`);