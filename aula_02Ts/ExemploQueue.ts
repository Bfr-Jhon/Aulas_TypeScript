import read = require("readline-sync");
import Queue = require("./Queue");


const fila = new Queue<string>();

fila.enqueue("Renan");
fila.enqueue("Vivian");
fila.enqueue("Erick");
//fila.enqueue(read.question("Digite um nome: "));

fila.printQueue();
console.log("\n")

fila.dequeue();

fila.printQueue();

console.log("tamanho da fila ", fila.count());

console.log("a fila contem ", fila.contains("Erick"));