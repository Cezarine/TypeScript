export class Negociacoes {
    constructor() {
        this.ListNegociacoes = [];
    }
    Adiciona(pNegociacao) {
        this.ListNegociacoes.push(pNegociacao);
    }
    ListarNegociacoes() {
        return this.ListNegociacoes;
    }
}
