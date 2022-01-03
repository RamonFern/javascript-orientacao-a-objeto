import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
    static numContas = 0;
    
    constructor(cliente, agencia) {
        super(0, cliente, agencia);
        ContaCorrente.numContas += 1;
    }
//sobrescrevendo o comportamento do método sacar da classe pai
    sacar(valor) {
        let taxa = 1.1;
        return this._sacar(valor, taxa);
        // return super._sacar(valor, taxa);
    }

    teste() {
        super.teste();
        console.log("Teste na classe conta corrente");
    }

}