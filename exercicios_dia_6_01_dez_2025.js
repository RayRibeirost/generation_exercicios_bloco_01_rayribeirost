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

/* let codproduto, produto, preco, qtd, total;

codproduto = readline.questionInt("Insira o código do produto (1 a 6), conforme o cardápio: ");
qtd = readline.questionInt("Digite a quantidade desejada: ");

switch (codproduto) {
  case 1:
    produto = "Cachorro quente";
    preco = 10;
    break;
  case 2:
    produto = "X-salada";
    preco = 15;
    break;
  case 3:
    produto = "X-bacon";
    preco = 18;
    break;
  case 4:
    produto = "Bauru";
    preco = 12;
    break;
  case 5:
    produto = "Refrigerante";
    preco = 8;
    break;
  case 6:
    produto = "Suco de laranja";
    preco = 13;
    break;
}

if (codproduto >= 1 && codproduto <= 6) {
    total = qtd * preco
    console.log(`Produto: ${produto}`);
    console.log(`Valor Total: R$${total.toFixed(2)}`);
} else {
    console.log("Você digitou um código inválido, tente novamente.")   
}   */

//exercício 06

/* let nomeColaborador, codCargo, cargo, percentual, salario, salarioReajustado;

nomeColaborador = readline.question("Digite o nome do colaborador: ")
codCargo = readline.questionInt("Insira o código do cargo (1 a 6): ");
salario = readline.questionInt("Digite o salário atual: ");

switch (codCargo) {
  case 1:
    cargo = "Gerente";
    percentual = 0.1;
    break;
  case 2:
    cargo = "Vendedor";
    percentual = 0.07;
    break;
  case 3:
    cargo = "Supervisor";
    percentual = 0.09;
    break;
  case 4:
    cargo = "Motorista";
    percentual = 0.06;
    break;
  case 5:
    cargo = "Estoquista";
    percentual = 0.05;
    break;
  case 6:
    cargo = "Técnico de TI";
    percentual = 0.08;
    break;
}

if (codCargo >= 1 && codCargo <= 6) {
  salarioReajustado = salario + (percentual * salario);
  console.log(`Nome do colaborador: ${nomeColaborador}`)
  console.log(`Cargo: ${cargo}`);
  console.log(`Salário: R$${salarioReajustado.toFixed(2)}`);
} else {
  console.log("Você digitou um código de cargo inválido, tente novamente.");
}   */

//exercício 07



//exercício 08



