import { NegociacoesDoDia } from "../Interfaces/NegociacaoDoDia.js";
import { Negociacao } from "../Models/negociacao.js";

export class NegociacoesServices
{
    public ObterNegociacoesDoDia(): Promise<Negociacao[]>
    {
        return fetch('http://localhost:8080/dados')
            .then(res => res.json())
            .then((dados: NegociacoesDoDia[]) => {
                return dados.map(DadosDeHoje => {
                    return new Negociacao(new Date(), DadosDeHoje.vezes, DadosDeHoje.montante);
                });
            });
    }
}