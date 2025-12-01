"use strict";
import readline, { question } from "readline-sync";

let codOperacao, operacao, saldo, valor, saida;
saldo = 1000;
codOperacao = readline.questionFloat(
  "Realize uma operação (1-ver saldo, 2-saque, 3-depósito): "
);

switch (codOperacao) {
  case 1:
    operacao = "Saldo";
    saida = `Saldo: R$ ${saldo.toFixed(2)}`;
    break;
  case 2:
    operacao = "Saque";
    valor = readline.questionFloat("Valor: ");
    if (saldo > valor) saldo -= valor;
    saida =
      valor > saldo
        ? "Saldo insuficiente!"
        : `Novo saldo: R$ ${saldo.toFixed(2)}`;
    break;
  case 3:
    operacao = "Depósito";
    valor = readline.questionFloat("Valor: ");
    saldo += valor;
    saida = `Novo saldo: R$ ${saldo.toFixed(2)}`;
    break;
}

if (codOperacao >= 1 && codOperacao <= 3) {
  console.log(`Operação - ${operacao}`);
  console.log(saida);
} else {
  console.log("Operação inválida!");
}
