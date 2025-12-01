"use strict";
import readline, { question } from "readline-sync";

let nomeColaborador, codCargo, cargo, percentual, salario, salarioReajustado;

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
}
