export class Conta {
    constructor(saldoInicial, cliente, agencia) {
        if(this.constructor == Conta){
            throw new Error("Você não deveria instaciar uma conta do tipo Conta diretamente, pois é uma classe abstrata");
        }
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }
    
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

    teste() {
        console.log("Teste na classe conta");
    }

    //método abstrato
    sacar(valor) {
        throw new Error("O método sacar é abstrato");
    }

    _sacar(valor, taxa) {
        if(this._saldo >= valor) {
            this._saldo -= valor;
            return valor    
        }
        return 0;
    }

    depositar(valor) {
        if(valor < 100){
            return;
        }
        this._saldo += valor;
    }

    transferir(valor, conta) {
        const valorSaque = this.sacar(valor);
        conta.depositar(valorSaque);
    }
}