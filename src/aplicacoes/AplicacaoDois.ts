import { Cliente } from "../model/cliente/Cliente";
import { Endereco } from "../model/cliente/Endereco";
import { ContaCorrente } from "../model/conta/ContaCorrente";

const cliente = new Cliente(
  "105.961.009-13",
  "Patrícia Santos ",
  "33356168432",
  true,
  [new ContaCorrente(1000, "04442-5")],
  [
    new Endereco(
      "58580-000",
      "centro",
      "4444",
      "Apartamento 50",
      "Monteiro",
      "PB",
      "222.333.555-222"
    ),
    new Endereco(
      "58580-000",
      "centro",
      "222",
      "Apartamento 50",
      "Monteiro",
      "PB",
      "222.333.555-222"
    ),
    new Endereco(
      "5555-333",
      "Bairro Pilão",
      "111",
      "Apartamento 13",
      "Serra Branca",
      "PB",
      "222.333.555-55"
    ),
  ]
);

cliente.listarEnderecos();
