import read = require("readline-sync");

const numeros: Array<number> = new Array<number>();

numeros.push(5);
numeros.push(1,5,7,9)

numeros.push(read.questionInt("Digite um numero: "));

//console.table(numeros);

for(let numero of numeros){
    console.log(numero)
}

console.log("O numero 5 existe? ", numeros.includes(5));

//deletar elemento
numeros.splice(numeros.indexOf(7), 1);

console.table(numeros);