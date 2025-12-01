"use strict";
import readline, { question } from "readline-sync";

let nome, idade, ehPrimeiraDoacao, sexo, estaApto;

nome = readline.question("Digite o nome do doador: ");
idade = readline.questionInt("Digite a idade do doador: ");
sexo = readline.keyIn("Qual seu sexo? (f/m) ", { limit: "fmFM" });
ehPrimeiraDoacao = readline.keyInYN("Primeira doação de sangue? ");

if (idade > 18 && idade < 60) {
  estaApto = true;
} else if (idade >= 60 && idade <= 69 && ehPrimeiraDoacao === false) {
  estaApto = true;
} else {
  estaApto = false;
}

console.log(
  `${nome} ${estaApto ? "está" : "não está"} ${
    sexo.toLowerCase() === "f" ? "apta" : "apto"
  } para doar sangue!`
);