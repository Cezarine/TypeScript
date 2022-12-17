import { Imprimivel } from "../Interfaces/Imprimivel.js";
import { Modelo } from "../Interfaces/Modelo.js";

export class Negociacao implements Imprimivel, Modelo<Negociacao>
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

    static CriaNegociacao(dataString: string, quantidadeString: string, valorString: string): Negociacao
    {
        const exp = /-/g;
        const date = new Date(dataString.replace(exp,','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date,quantidade, valor);
    }

    ParaTexto(): String{
        return `
            Data: ${this.data},
            Quantidade: ${this.quantidade},
            Valor: ${this.valor}
        `;
    }

    EhIgual(Negociacao: Negociacao): boolean
    {
        return this.data.getDate()    === Negociacao.data.getDate()
            && this.data.getMonth()   === Negociacao.data.getMonth()
            && this.data.getFullYear()=== Negociacao.data.getFullYear();
    }
}