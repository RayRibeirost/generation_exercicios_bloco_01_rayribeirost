import readline from "readline-sync";

let inputColor: string;

const colorsArr: Array<string> = new Array<string>();

for(let i:number = 0; i < 5; i++) {
    inputColor = readline.question("Insira uma cor: ");
    colorsArr.push(inputColor);
};

console.log("Listar todas as cores: ");
console.log(colorsArr);
console.log("Ordenar as cores: ");
console.log(colorsArr.sort());
