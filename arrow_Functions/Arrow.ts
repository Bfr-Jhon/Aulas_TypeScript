const numeros: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("\n listar numeros");

// sem arrow function
for (let numero of numeros){
    console.log(numero);
}

// com a arrow function

numeros.forEach(numero => console.log(numero)); // 1 2 3 4 5 6 7 8 9 10

numeros.forEach(numero => console.log(numero * 2 )); // 2 4 6 8 10 12 14 16 18 20

numeros.forEach(numero => {if (numero % 2 === 0) console.log(numero)}); // 2 4 6 8 10

