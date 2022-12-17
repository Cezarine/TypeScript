export class Negociacao {
    constructor(data, quantidade, valor) {
        this._data = data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    static CriaNegociacao(dataString, quantidadeString, valorString) {
        const exp = /-/g;
        const date = new Date(dataString.replace(exp, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor);
    }
    ParaTexto() {
        return `
            Data: ${this.data},
            Quantidade: ${this.quantidade},
            Valor: ${this.valor}
        `;
    }
    EhIgual(Negociacao) {
        return this.data.getDate() === Negociacao.data.getDate()
            && this.data.getMonth() === Negociacao.data.getMonth()
            && this.data.getFullYear() === Negociacao.data.getFullYear();
    }
}
//# sourceMappingURL=negociacao.js.map