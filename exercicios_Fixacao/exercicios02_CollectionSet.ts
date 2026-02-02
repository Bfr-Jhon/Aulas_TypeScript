import read = require("readline-sync");

const numeros: Set<number> = new Set<number>();


for (let i = 0; i < 10; i ++){
    numeros.add(read.questionInt("Digite um numero: "));
}

console.table(numeros);