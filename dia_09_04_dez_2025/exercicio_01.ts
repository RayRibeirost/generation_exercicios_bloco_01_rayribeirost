import readline from "readline-sync";
import { Queue } from "../src/data-structures/Queue.js";

const customerQueue: Queue<string> = new Queue<string>;
let option: number, customerName: string, exit: boolean = false;

do {
    console.log("************************************************");
    console.log("1 - Adicionar Cliente na Fila");
    console.log("2 - Listar todos os Clientes");
    console.log("3 - Retirar cliente da fila");
    console.log("0 - Sair");
    console.log("************************************************");
    option = readline.questionInt("Entre com a opção desejada: ");

    switch(option) {
        case 1:
            customerName = readline.question("Digite o nome: ");
            customerQueue.enqueue(customerName);
            console.log("Fila:");
            customerQueue.printQueue();
            console.log("Cliente Adicionado!");
            break;
        case 2:
            if (customerQueue.isEmpty()) {
                console.log("A fila está vazia!");
            } else {
                console.log("Lista de Clientes na Fila:");
                customerQueue.printQueue();
            };
            break;
        case 3:
            if (customerQueue.isEmpty()) {
                console.log("A fila está vazia!");
            } else {
                customerQueue.dequeue();
                console.log("Fila:");
                customerQueue.printQueue();
                console.log("O cliente foi chamado!");
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