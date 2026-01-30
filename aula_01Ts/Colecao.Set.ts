import read = require("readline-sync");

const cores: Set<string> = new Set<string>();

cores.add("Azul");
cores.add("Verde");
cores.add("Azul"); // Duplicata, não será adicionada
cores.add("Vermelho");
cores.add("Amarelo");

console.table(cores);

// verifica se o elemento existe
console.log("a cor verde existe?", cores.has("Verde"));

//deletar elemento
cores.delete("Amarelo");

console.table(cores);

