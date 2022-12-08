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
    private negociacoesView = new NegociacoesView('#negociacoesView', true);
    private mensagemView = new MensagemView('#mensagemView', false);

    constructor()
    {
        this.inputData       = document.querySelector('#data') as HTMLInputElement;
        this.inputQuantidade = <HTMLInputElement>document.querySelector('#quantidade');
        this.inputValor      = document.querySelector('#valor') as HTMLInputElement;
        this.negociacoesView.Update(this.negociacoes);
    }

    private AtualizaView(): void
    {
        this.negociacoesView.Update(this.negociacoes);
        this.mensagemView.Update('Negociação Salva com Sucesso!');
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
        const negociacao = Negociacao.CriaNegociacao(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
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