export abstract class Pessoa {
    constructor(
      private _cpf: string,
      private _nome: string,
      private _telefone: string
    ) {}
  
    public get telefone(): string {
      return this._telefone;
    }
  
    public set telefone(value: string) {
      this._telefone = value;
    }
  
    public get nome(): string {
      return this._nome;
    }
  
    public set nome(value: string) {
      this._nome = value;
    }
  
    public get cpf(): string {
      return this._cpf;
    }
  }