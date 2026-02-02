import read = require("readline-sync");

const participantes: Map<number, string> = new Map<number, string>();


participantes.set(1, "Ana");
participantes.set(2, "Samuel");
participantes.set(3, "Leonardo");
participantes.set(4, "Camila");

// let matricula = read.questionInt("Digite o numero da matricula:  ");
// let nome = read.question("Digite o nome do participante: ");

// participantes.set(matricula, nome);


for(let[matricula, nome] of participantes){
    console.log(`Matricula: ${matricula} - nome: ${nome}`)

};

// procura um elemento pela chave
console.log("Existe a matricula 2? ", participantes.has(2));


// procura um elemento pelo valor, tem que transformar o Map em um Array
console.log("Nome a participante ana?", Array.from(participantes.values()).includes("Ana"));

for (let matricula of participantes.keys()){
    console.log(`Matricula do participante: ${matricula}`);
}

participantes.delete(3);

console.table(participantes);