import { Credito } from "../Credito";
import { Debito } from "../Debito";

export abstract class Conta {
  //private numero: String;
  constructor(private numero: string) {}
  public credito: Credito[] = [];
  public debito: Debito[] = [];

  private depositar(valor: number, date = new Date()): void {
    const credito = new Credito(valor, date, this.numero);
    this.credito.push(credito);
  }

  private sacar(valor: number, date = new Date()): void {
    if (this.calcularSaldo() >= valor) {
      const debito = new Debito(valor, date, this.numero);
      this.debito.push(debito);
    }
  }

  abstract calcularSaldo(): Number;
}
