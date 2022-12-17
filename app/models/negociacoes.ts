import { Imprimivel } from "../Interfaces/Imprimivel.js";
import { Negociacao } from "./negociacao.js";

export class Negociacoes implements Imprimivel
{
    private ListNegociacoes: Array<Negociacao> = [];

    Adiciona(pNegociacao: Negociacao)
    {
        this.ListNegociacoes.push(pNegociacao);
    }

    ListarNegociacoes(): ReadonlyArray<Negociacao>
    {
        return this.ListNegociacoes;
    }

    ParaTexto(): String
    {
        return JSON.stringify(this.ListNegociacoes, null, 2);
    }
}