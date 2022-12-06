import { DiasDaSemana } from "../Enums/Dias-da-Semana.js";
import { Negociacao } from "../Models/negociacao.js";
import { Negociacoes } from "../Models/negociacoes.js";
import { MensagemView } from "../Views/mensagem-view.js";
import { NegociacoesView } from "../Views/negociacoes-view.js";

export class NegociacaoController
{
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes(); 
    private negociacoesView = new NegociacoesView('#negociacoesView');
    private mensagemView = new MensagemView('#mensagemView');
    private readonly DOMINGO = 0;
    private readonly SABADO = 6;

    constructor()
    {
        this.inputData       = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor      = document.querySelector('#valor');
        this.negociacoesView.Update(this.negociacoes);
    }

    private AtualizaView(): void
    {
        this.negociacoesView.Update(this.negociacoes);
        this.mensagemView.Update('Negociação Salva com Sucesso!');
    }

    private criaNegociacao(): Negociacao
    {
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp,','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date,quantidade, valor);
    }

    private LimpaCampos(): void
    {
        this.inputData.value       = '';
        this.inputQuantidade.value = '1';
        this.inputValor.value      = '0.00';
        this.inputData.focus();
    }

    private DiasUteis(pData: Date): Boolean
    {
        return pData.getDay() > DiasDaSemana.DOMINGO && 
               pData.getDay() < DiasDaSemana.SABADO;
    }

    Adiciconar(): void
    {
        const negociacao = this.criaNegociacao();
        if (!this.DiasUteis(negociacao.data))
        {
            this.mensagemView.Update('Não pode fazer transações em dias não uteis!!');
            return;
        }
        this.negociacoes.Adiciona(negociacao);
        this.LimpaCampos();
        this.AtualizaView();
    }
}