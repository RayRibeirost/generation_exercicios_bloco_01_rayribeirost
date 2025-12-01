"use strict";
import readline, { question } from "readline-sync";


let entrada, saida;

saida =
  "Desconhecido. Vc provavelmente digitou alguma das opções de forma errada.";

const newQuestion = (questionSent) => {
  const question = readline.question(questionSent).toLocaleLowerCase();
  return question;
};

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

console.log(saida);