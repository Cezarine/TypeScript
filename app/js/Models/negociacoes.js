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
    ParaTexto() {
        return JSON.stringify(this.ListNegociacoes, null, 2);
    }
}
//# sourceMappingURL=negociacoes.js.map