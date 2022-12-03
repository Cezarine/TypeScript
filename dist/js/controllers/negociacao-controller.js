import { Negociacao } from "../models/negociacao.js";
export class NegociacaoController {
    inputData;
    inputQuantidade;
    inputValor;
    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }
    Adiciconar() {
        const negociacao = this.criaNegociacao();
        console.log(negociacao);
        this.LimpaCampos();
    }
    criaNegociacao() {
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quantidade, valor);
    }
    LimpaCampos() {
        this.inputData.value = '';
        this.inputQuantidade.value = '1';
        this.inputValor.value = '0.00';
        this.inputData.focus();
    }
}
