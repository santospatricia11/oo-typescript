export class ExcetionErroCliente extends TypeError {
  constructor(message: string, private statusCode: number) {
    super(message);
  }
}
