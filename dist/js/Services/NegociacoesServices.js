import { Negociacao } from "../Models/negociacao.js";
export class NegociacoesServices {
    ObterNegociacoesDoDia() {
        return fetch('http://localhost:8080/dados')
            .then(res => res.json())
            .then((dados) => {
            return dados.map(DadosDeHoje => {
                return new Negociacao(new Date(), DadosDeHoje.vezes, DadosDeHoje.montante);
            });
        });
    }
}
//# sourceMappingURL=NegociacoesServices.js.map