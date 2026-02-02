import read from 'readline-sync';
import Queue from '../Queue';

const fila = new Queue<string>();
let continuar: boolean = true;

// console.log('1 - Adicionar um novo Cliente na fila');
// console.log('2 - Listar todos os Clientes na fila');
// console.log('3 - Chamar (retirar) uma pessoa da fila');
// console.log('0 - Sair');

while (continuar) {
console.log('1 - Adicionar um novo Cliente na fila');
console.log('2 - Listar todos os Clientes na fila');
console.log('3 - Chamar (retirar) uma pessoa da fila');
console.log('0 - Sair');


  let opcao = read.questionInt('Escolha uma opcao: \n');

  switch (opcao) {
    case 1:
      fila.enqueue(read.question('Add um cliente na lista: '));
      console.log('Cliente adicionado!\n');
      break;

    case 2:
        if (fila.count() === 0) {
            console.log('A Fila está vazia!\n');
        } else {
            console.log('Lista de Clientes na Fila:\n');
            fila.printQueue();
        }
      break;

    case 3:
      if (fila.count() === 0) {
        console.log('A Fila está vazia!, não há clientes para chamar.\n');
      } else {
        fila.dequeue(); //tirei o cliente da fila
        
        console.log('Fila:');
        fila.printQueue(); //mostra a fila atualizada
        console.log('O cliente foi chamado!\n');
      }
      break;

    case 0:
      continuar = false;
      console.log('\nPrograma Finalizado!\n');
      break;

    default:
      console.log('Digite uma opção válida!\n');
  }
}
