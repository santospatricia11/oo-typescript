import { Cliente } from "../model/cliente/Cliente";
import { Endereco } from "../model/Cliente/Endereco";
import { ContaCorrente } from "../model/conta/ContaCorrente";
import { ContaPoupanca } from "../model/conta/ContaPoupanca";

const clienteUm = new Cliente(
  "230.693.350-10",
  "Patricia dos S. Pereira",
  "3334445566",
  true,
  [new ContaCorrente(0, "09302-2")],
  [
    new Endereco(
      "23457-233",
      "Avenida Floriano Peixoto",
      "3003",
      "Apartamento 109",
      "Campina Grande",
      "PB",
      "222.333.801-00"
    ),
    new Endereco(
      "23457-233",
      "Avenida Floriano Peixoto",
      "3003",
      "Apartamento 109",
      "Campina Grande",
      "PB",
      "222.333.801-00"
    ),
    new Endereco(
      "23457-233",
      "Avenida Floriano Peixoto",
      "3003",
      "Apartamento 109",
      "Campina Grande",
      "PB",
      "222.333.801-00"
    ),
  ]
);

const clienteDois = new Cliente(
  "300.303.509-00",
  "Erivam Barros",
  "5667777788889",
  true,
  [new ContaPoupanca(10, "08212-2")],
  [
    new Endereco(
      "23457-233",
      "Avenida Floreano Peixoto",
      "3003",
      "Apartamento 109",
      "Campina Grande",
      "PB",
      "222.333.801-00"
    ),
  ]
);

const contaClienteUm = clienteUm.contas[0];
const contaClienteDois = clienteDois.contas[0];

contaClienteUm.depositar(1000);

console.log("Deposito ContaUm :" + contaClienteUm.calcularSaldo());

contaClienteDois.depositar(1000);

console.log("Deposito conta cliente dois :" + contaClienteDois.calcularSaldo());

(contaClienteUm as ContaCorrente).transferir(contaClienteDois, 500);

console.log("Saldo conta um:" + contaClienteUm.calcularSaldo());
console.log("Saldo conta dois:" + contaClienteDois.calcularSaldo());
