export class ExcetionErroCliente extends Error {
    constructor(message: string, private statusCode: number) {
      super(message);
    }
  }