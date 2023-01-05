import { Conta } from "./abstract/Conta";

export class ContaPoupanca extends Conta {
  constructor(private rentabilidadeMensal: number, numero: string) {
    super(numero);
  }

  public calcularRendimento(): number {
    let totalSaldo = 0;

    this.credito.forEach((credito) => {
      totalSaldo = totalSaldo + credito.getValor();
    });

    this.debito.forEach((debito) => {
      totalSaldo = totalSaldo - debito.getValor();
    });

    return totalSaldo * (this.rentabilidadeMensal * 0.01);
  }

  public calcularSaldo(): number {
    let totalSaldo = this.calcularRendimento();

    this.credito.forEach((credito) => {
      totalSaldo = totalSaldo + credito.getValor();
    });

    this.debito.forEach((debito) => {
      totalSaldo = totalSaldo - debito.getValor();
    });

    return totalSaldo;
  }
}
