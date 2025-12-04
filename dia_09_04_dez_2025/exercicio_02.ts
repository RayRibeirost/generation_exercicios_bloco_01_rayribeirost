import readline from "readline-sync";
import { Stack } from "../src/data-structures/Stack.js";

const bookStack: Stack<string> = new Stack<string>;
let option: number, bookName: string, exit: boolean = false;

do {
    console.log("************************************************");
    console.log("1 - Adicionar Livro na Pilha");
    console.log("2 - Listar todos os Livros");
    console.log("3 - Retirar Livro da Pilha");
    console.log("0 - Sair");
    console.log("************************************************");
    option = readline.questionInt("Entre com a opção desejada: ");

    switch(option) {
        case 1:
            bookName = readline.question("Digite o nome: ");
            bookStack.push(bookName);
            console.log("Pilha:");
            bookStack.printStack();
            console.log("Livro Adicionado!");
            break;
        case 2:
            if (bookStack.isEmpty()) {
                console.log("A pilha está vazia!");
            } else {
                console.log("Lista de livros na pilha:");
                bookStack.printStack();
            };
            break;
        case 3:
            if (bookStack.isEmpty()) {
                console.log("A pilha está vazia!");
            } else {
                bookStack.pop();
                console.log("Pilha:");
                bookStack.printStack();
                console.log("O livro foi retirado da pilha!");
            };
            break;
        case 0:
            exit = true;
            break;
        default:
            console.log("Insira uma opção válida!") 
    }
} while(!exit);

console.log("Programa finalizado!")