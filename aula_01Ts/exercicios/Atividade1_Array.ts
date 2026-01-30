import read = require("readline-sync");

const cores : Array<string> = new Array<string>();

for(let i= 0; i < 5; i++){

    cores.push(read.question("Digite uma cor: "));
}

cores.sort(); // ordena as cores em ordem alfabética

//cores em ordem
for (let cor of cores){
    console.log(cor);
}