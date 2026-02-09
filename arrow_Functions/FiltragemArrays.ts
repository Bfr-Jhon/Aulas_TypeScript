const numerosOrdenados: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 
const numerosRepetidos: Array<number> = [1, 2, 3, 1, 4, 5, 6, 2, 7, 8, 9, 3, 4, 10, 7];
 
const numerosDesordenados: Array<number> = [6, 7, 8, 1, 4, 5, 9, 10, 2, 3];
 
const estados: Array<string> = [
    "São Paulo",
    "Rio de Janeiro",
    "Minas Gerais",
    "Espirito Santo",
    "Rio Grande do Sul",
    "Santa Catarina",
    "Paraná"
];
 
const estadosRepetidos: Array<string> = [
    'São Paulo',
    'Rio de Janeiro',
    'Minas Gerais',
    'Espirito Santo',
    'São Paulo',
    'Rio de Janeiro',
    'São Paulo',
    'Rio de Janeiro',
];
 
const estadosCentroOeste: Array<string> = [
    'Goiás',
    'Mato Grosso',
    'Mato Grosso do Sul',
    'Brasília'
];

// Exemplo MAP
console.log("\n multiplicar todos os elementos por 3");

const numerosMultiplicadosPor3 = numerosOrdenados.map( numero => numero * 3);
console.dir(numerosMultiplicadosPor3); // 3,  6,  9, 12, 15, 18, 21, 24, 27, 30



// Exemplo Filter
console.log("\nListar Todos os Estados que possuem a Palavra RIO");

const estadosRio = estados.filter(estado => estado.toUpperCase().includes("RIO"));
console.dir(estadosRio);


console.log("\nListar Todos os Estados que Terminam com SUL");

const estadosTerminaSul = estados.filter(estado => estado.toUpperCase().endsWith("SUL"));
console.dir(estadosTerminaSul);



// Exemplo Reduce ( é usado bastante em carrinho de compra para exibir o valor final)
console.log ("\n Listar todos os estados SEM REPETICOES");

const estadosSemRepeticoes =  estadosRepetidos.reduce((acumulador: string[], estado) =>{
    if( acumulador.indexOf(estado) === -1)
        acumulador.push(estado)
    return acumulador;
}, [])

console.dir(estadosSemRepeticoes);



// Exemplo Find
console.log ("\nEncontrar o Primeiro Numero Maior do que 9");

const numeroMaiorQue9 = numerosRepetidos.find( numero => numero > 9 );
console.log(numeroMaiorQue9);


const indiceNumeroMaiorQue9 = numerosRepetidos.findIndex( numero => numero > 9 );
console.log(indiceNumeroMaiorQue9);

// Spread Operator

console.log("\n Combinar 2 Arrays");
const arrayCombinado = [...numerosOrdenados, ...numerosRepetidos];
console.dir(arrayCombinado);