import { Credito } from "../Credito";
import { Debito } from "../Debito";
import { ExcetionErroCliente } from "../../erro/ExcetionErroCliente";

export abstract class Conta {
  //private numero: String;
  constructor(private numero: string) {}
  public credito: Credito[] = [];
  public debito: Debito[] = [];

  public depositar(valor: number, date = new Date()): void {
    const credito = new Credito(valor, date, this.numero);
    this.credito.push(credito);
  }

  public sacar(valor: number, date = new Date()): void {
    if (this.calcularSaldo() >= valor) {
      const debito = new Debito(valor, date, this.numero);
      this.debito.push(debito);
    } else {
      throw new ExcetionErroCliente("Saldo insuficiente", 403);
    }
  }

  abstract calcularSaldo(): Number;
}
