import { Negociacao } from "./negociacao.js";

export class Negociacoes
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
}