import read = require("readline-sync");

let numero1: number;
let numero2: number;

numero1 = read.questionFloat("Digite o Primeiro Numero: ");
numero2 = read.questionFloat("Digite o Segundo Numero: ");

console.log(`${numero1} + ${numero2} = `, numero1 + numero2);