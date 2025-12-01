"use strict";
import readline, { question } from "readline-sync";

//exercício 01

/* let numA, numB, numC, soma, resultado
numA = readline.questionInt("Digite o número A: ");
numB = readline.questionInt("Digite o número B: ");
numC = readline.questionInt("Digite o número C: ");
soma = numA + numB;
if (soma === numC) {
    resultado = "Igual a";
} else if (soma > numC) {
    resultado = "Maior do que";
} else {
    resultado = "Menor do que"
}
console.log(`A Soma de A + B é ${resultado} C`); */


//exercício 02

/* let num;
num = readline.questionInt("Digite um número: ");
console.log(`O Número ${num} é ${num % 2 === 0 ? "par" : "ímpar"} e ${num > 0 ? "positivo" : "negativo"}!`); */


//exercício 03

/* let nome, idade, ehPrimeiraDoacao, sexo, estaApto;

nome = readline.question("Digite o nome do doador: ");
idade = readline.questionInt("Digite a idade do doador: ");
sexo = readline.keyIn("Qual seu sexo? (f/m) ", {limit: 'fmFM',});
ehPrimeiraDoacao = readline.keyInYN("Primeira doação de sangue? ");

if (idade > 18 && idade < 60) {
    estaApto = true;
} else if (idade >= 60 && idade <= 69 && ehPrimeiraDoacao === false) {
    estaApto = true;
} else {
    estaApto = false;
}

console.log(`${nome} ${estaApto ? "está" : "não está"} ${sexo.toLowerCase() === "f" ? "apta" : "apto"} para doar sangue!`); */


//exercício 04

/* let entrada, saida;

saida = "Desconhecido. Vc provavelmente digitou alguma das opções de forma errada.";

const newQuestion = (questionSent) => {
    const question = readline.question(questionSent).toLocaleLowerCase();
    return question;
}

entrada = newQuestion("Digite se é vertebrado ou invertebrado: ");

if (entrada === "vertebrado") {
    entrada = newQuestion("Agora, digite se é ave ou mamifero: ");
    if (entrada === "ave") {
        entrada = newQuestion("Digite se é onivoro ou carnivoro: ");
        if (entrada === "onivoro") saida = "Pomba";
        if (entrada === "carnivoro") saida = "Águia";
    } else if (entrada === "mamifero") {
        entrada = newQuestion("Digite se é onivoro ou herbivoro: ");
        if (entrada === "onivoro") saida = "Homem";
        if (entrada === "herbivoro") saida = "Vaca";
    }
} else if (entrada === "invertebrado") {
    entrada = newQuestion("Agora, digite se é inseto ou anelideo: ");
    if (entrada === "inseto") {
      entrada = newQuestion("Digite se é hematofago ou herbivoro: ");
      if (entrada === "hematofago") saida = "Pulga";
      if (entrada === "herbivoro") saida = "Lagarta";
    } else if (entrada === "anelideo") {
      entrada = newQuestion("Digite se é hematofago ou onivoro: ");
      if (entrada === "onivoro") saida = "Sanguessuga";
      if (entrada === "herbivoro") saida = "Minhoca";
    }
} 

console.log(saida) */

//exercício 05



//exercício 06



//exercício 07



//exercício 08



