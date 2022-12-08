import { DiasDaSemana } from "../Enums/Dias-da-Semana.js";
import { Negociacao } from "../Models/negociacao.js";
import { Negociacoes } from "../Models/negociacoes.js";
import { MensagemView } from "../Views/mensagem-view.js";
import { NegociacoesView } from "../Views/negociacoes-view.js";
export class NegociacaoController {
    inputData;
    inputQuantidade;
    inputValor;
    negociacoes = new Negociacoes();
    negociacoesView = new NegociacoesView('#negociacoesView', true);
    mensagemView = new MensagemView('#mensagemView', false);
    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.Update(this.negociacoes);
    }
    AtualizaView() {
        this.negociacoesView.Update(this.negociacoes);
        this.mensagemView.Update('Negociação Salva com Sucesso!');
    }
    LimpaCampos() {
        this.inputData.value = '';
        this.inputQuantidade.value = '1';
        this.inputValor.value = '0.00';
        this.inputData.focus();
    }
    DiasUteis(pData) {
        return pData.getDay() > DiasDaSemana.DOMINGO &&
            pData.getDay() < DiasDaSemana.SABADO;
    }
    Adiciconar() {
        const negociacao = Negociacao.CriaNegociacao(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        if (!this.DiasUteis(negociacao.data)) {
            this.mensagemView.Update('Não pode fazer transações em dias não uteis!!');
            return;
        }
        this.negociacoes.Adiciona(negociacao);
        this.LimpaCampos();
        this.AtualizaView();
    }
}
