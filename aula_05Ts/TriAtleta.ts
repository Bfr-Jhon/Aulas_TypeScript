import { Ciclista } from "./ciclista";
import { Corredor } from "./Corredor";
import { Nadador } from "./Nadador";
import { Pessoa } from "./Pessoa";

export class TriAtleta extends Pessoa implements Ciclista, Corredor, Nadador {
    public aquecer(): void {
        throw new Error("Method not implemented.");
    }
    public cansar(): void {
        throw new Error("Method not implemented.");
    }

    public dormir(): void {
        throw new Error("Method not implemented.");
    }
    
    public pedalar(): void {
        throw new Error("Method not implemented.");
    }
    
    public correr(): void {
        throw new Error("Method not implemented.");
    }

    public nadar(): void {
        throw new Error("Method not implemented.");
    }


    
}