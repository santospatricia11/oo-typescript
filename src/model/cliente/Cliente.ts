import { Conta } from "../conta/abstract/Conta";
import { IUsuario } from "../interface/IUsuario";
import { Endereco } from "./Endereco";
import { Pessoa } from "./abstract/Pessoa";

export class Cliente extends Pessoa implements IUsuario {
  constructor(
    cpf: string,
    nome: string,
    telefone: string,
    private _vip: boolean,
    private _contas: Conta[],
    private _enderecos: Endereco[]
  ) {
    super(cpf, nome, telefone);
  }

  public autenticar(): boolean {
    return true;
  }

  public listarEnderecos(): void {
    console.log(this.enderecos);
  }

  public get enderecos(): Endereco[] {
    return this._enderecos;
  }

  public get contas(): Conta[] {
    return this._contas;
  }

  public get vip(): boolean {
    return this._vip;
  }

  public set vip(value: boolean) {
    this._vip = value;
  }
}
