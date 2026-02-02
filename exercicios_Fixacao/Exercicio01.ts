import read = require("readline-sync");

const numeros: Array<number> = new Array<number>();

numeros.push(2);
numeros.push(5);
numeros.push(1);
numeros.push(3);
numeros.push(4); 
numeros.push(9); 
numeros.push(7); 
numeros.push(8); 
numeros.push(10);
numeros.push(6);

const buscaNum = read.questionInt("Digite o numero que deseja buscar: ");

let encontrado = false;

for (let i = 0; i < numeros.length; i++) {
    if (buscaNum === numeros[i]) {
        console.log(`O numero esta na posicao ${i} do array`);
        encontrado = true;
        break;
    }
    else{
        console.log(`nao encontrado na posicao ${i}`);
    }
}




if (!encontrado) {
    console.log("Numero nao encontrado no array");
}
