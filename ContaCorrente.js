import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    static numContas = 0;
    
   
  

    set cliente(novoCliente) {
        if(novoCliente instanceof Cliente){
            this._cliente = novoCliente;
        }
    }
    get cliente() {
        return this._cliente;
    }
    get saldo() {
        return this._saldo;
    }

    constructor(agencia, cliente) {
        this.agencia = agencia;
        this._cliente = cliente;
        this._saldo = 0;
        ContaCorrente.numContas += 1;
    }

    sacar(valor) {
        if(this._saldo >= valor) {
            this._saldo -= valor;
            return valor    
        }
    }

    depositar(valor) {
        if(valor <= 100){
            return;
        }
        this._saldo += valor;
    }

    transferir(valor, conta) {
        const valorSaque = this.sacar(valor);
        conta.depositar(valorSaque);
    }
}