export class Negociacao
{
    private _data: Date;
    public readonly quantidade: number;
    public readonly valor: number;

    constructor(data: Date, quantidade: number, valor: number)
    {
        this._data = data;
        this.quantidade = quantidade;
        this.valor = valor;   
    }
    get volume(): number
    {
        return this.quantidade * this.valor;
    }

    get data(): Date
    {   
        const data = new Date(this._data.getTime());
        return data;
    }
}