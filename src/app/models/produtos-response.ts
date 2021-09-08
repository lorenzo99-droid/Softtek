export class ProdutosResponse
{
    public produtos!: Array<Produtos>
}

export class Produtos
{
    public nome!: string;
    public preco!: number;
    public quantidade!: number;

}