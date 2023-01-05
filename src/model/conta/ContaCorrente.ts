import { Conta } from "./abstract/Conta";

export class ContaCorrente extends Conta {
  constructor(private limite: number, numero: string) {
    super(numero);
  }

  public transferir(conta: Conta, valor: number): void {
    this.sacar(valor);
    conta.depositar(valor);
  }

  public calcularSaldo(): number {
    let totalSaldo = this.limite;

    this.credito.forEach((credito) => {
      totalSaldo = totalSaldo + credito.getValor();
    });

    this.debito.forEach((debito) => {
      totalSaldo = totalSaldo - debito.getValor();
    });

    return totalSaldo;
  }
}
