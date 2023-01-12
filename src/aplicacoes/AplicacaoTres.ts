import { Cliente } from "../model/cliente/Cliente";
import { Endereco } from "../model/cliente/Endereco";
import { ContaCorrente } from "../model/conta/ContaCorrente";

const clienteUm = new Cliente(
  "329.421.909-23",
  "Patrícia dos S. Pereira",
  "48999128752",
  true,
  [new ContaCorrente(1000, "11301-1")],
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

const contaClienteUm = clienteUm.contas[0];

contaClienteUm.depositar(100);

console.log(contaClienteUm.calcularSaldo());

contaClienteUm.sacar(50);

console.log(contaClienteUm.calcularSaldo());
