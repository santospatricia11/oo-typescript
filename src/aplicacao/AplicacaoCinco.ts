import { Cliente } from "../model/cliente/Cliente";
import { Endereco } from "../model/cliente/Endereco";
import { ContaPoupanca } from "../model/conta/ContaPoupanca";

const clienteUm = new Cliente(
  "329.421.909-23",
  "Patrícia dos S. Pereira",
  "48999128752",
  true,
  [new ContaPoupanca(1, "03452-2")],
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
