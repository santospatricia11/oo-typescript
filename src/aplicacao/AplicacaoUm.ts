import { Cargo } from "../model/funcionario/Cargo";
import { Funcionario } from "../model/funcionario/Funcionario";

var funcionarioUm = new Funcionario(
  2000,
  [new Cargo("Gerente")],
  "666.666.666-66",
  "Patrícia dos Santos",
  "33333333"
);

var funcionarioDois = new Funcionario(
  2000,
  [new Cargo("Atentente")],
  "104.040.560-00",
  "Ana Pereira ",
  "38383983904"
);

console.log(funcionarioUm);
console.log(funcionarioDois);
