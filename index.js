import { Cliente } from "./Cliente.js";
import { Conta } from "./Conta.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";


const cli1 = new Cliente("Pedro Raul", 123212345);

// const cli2 = new Cliente("Stephany Sophia", 32145634589);

// const contaSophia = new ContaCorrente(2555, cli2);

// contaSophia.depositar(100);

const contaRaul = new Conta(0, cli1, 3887);
const contaPaupanca = new Conta(200, cli1, 1021);
// contaSophia.transferir(30, contaRaul);

// console.log(cli1);
// console.log(cli2);
// console.log(contaSophia);
console.log(contaRaul);
console.log(contaPaupanca);
// console.log(ContaCorrente.numContas);

