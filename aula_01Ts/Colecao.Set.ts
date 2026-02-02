const cores: Set<string> = new Set<string>();

cores.add("Azul");
cores.add("Verde");
cores.add("Azul");
cores.add("Vermelho");
cores.add("Amarelo");

console.table(cores)

// Verifica se o elemento existe
console.log("A cor Verde existe? ", cores.has("verde")); // a resposta será False, pois o Set diferencia maiúsculas de minúsculas
console.log("A cor verde existe? ", cores.has("Verde")); // a resposta será True 

// Deletar elemento
//cores.delete("Azul");

console.table(cores);

for(let cor of cores){
    console.log(cor)
}