"use strict";
import readline, { question } from "readline-sync";

let codproduto, produto, preco, qtd, total;

codproduto = readline.questionInt(
  "Insira o código do produto (1 a 6), conforme o cardápio: "
);
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
  total = qtd * preco;
  console.log(`Produto: ${produto}`);
  console.log(`Valor Total: R$${total.toFixed(2)}`);
} else {
  console.log("Você digitou um código inválido, tente novamente.");
}
