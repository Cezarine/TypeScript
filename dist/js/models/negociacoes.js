export class Negociacoes {
    ListNegociacoes = [];
    Adiciona(pNegociacao) {
        this.ListNegociacoes.push(pNegociacao);
    }
    ListarNegociacoes() {
        return this.ListNegociacoes;
    }
}
