import read = require("readline-sync");
import Stack = require("./Stack");


const pilha = new Stack<string>();

pilha.push("Renan");
pilha.push("Vivian");
pilha.push("Erick");
pilha.push(read.question("Digite um nome: "));

console.log("Conteúdo da pilha:");
pilha.printStack();

console.log("\n")

pilha.pop();

pilha.printStack();

console.log("tamanho da pilha ", pilha.count());

console.log("a pilha contem ", pilha.contains("Erick"));