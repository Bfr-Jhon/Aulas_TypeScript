import { Corredor } from "./Corredor";
import { Pessoa } from "./Pessoa";

export class Jogador extends Pessoa implements Corredor {

    constructor(nome: string) {
        super(nome);
    }
    public aquecer(): void {
        throw new Error("Method not implemented.");
    }


    public correr(): void {
        throw new Error("Method not implemented.");
    }


    public cansar(): void {
        console.log("O jogador cansou! após 90 minutos de jogo.");
    }

    public dormir(): void {
        console.log("O jogador dormiu!");
    }
    
}

