import { Cliente } from "./Cliente.js";
import { Diretor } from "./funcionario/Diretor.js";
import { Gerente } from "./funcionario/Gerente.js";
import { SistemaDeAutenticacao } from "./SistemaDeAutenticacao.js";


const diretor = new Diretor("Sophia", 10000, 123212321);
diretor.cadastrarSenha("www");

const gerente = new Gerente("Raul", 5000, 12345454321);
gerente.cadastrarSenha("123");

const cliente = new Cliente("Gal", 234545644, "234");

const diretorEstaLogado = SistemaDeAutenticacao.login(diretor, "www");
const gerenteEstaLogado = SistemaDeAutenticacao.login(gerente, "123");
const clienteLogado = SistemaDeAutenticacao.login(cliente, "234");


console.log(diretorEstaLogado, gerenteEstaLogado, clienteLogado);
