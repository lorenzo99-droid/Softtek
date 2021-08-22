export class ContatosResponse
  {
      public contatos!: Array<Contato>;
  }

  export class Contato
  {
      public nome!: string;
      public idade!: number;
      public genero!: string;
  }