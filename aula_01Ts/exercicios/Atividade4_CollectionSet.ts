import read = require("readline-sync");

const numeros: Set<number> = new Set<number>();


numeros.add(2);
numeros.add(5);
numeros.add(1);
numeros.add(3);
numeros.add(4);
numeros.add(9);
numeros.add(7);
numeros.add(8);
numeros.add(10);
numeros.add(6);


const busca = read.questionInt("Digite um numero para verificar se existe: ");

if (numeros.has(busca)) {
    console.log(`O numero ${busca} existe.`);
}
else {
    console.log(`o numero ${busca} nao existe `);
}

console.table(numeros);