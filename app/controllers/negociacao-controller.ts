import { domInjector } from "../Decorators/DomInjects.js";
import { Inspect } from "../Decorators/Inspect.js";
import { LogarTempoExcecucao } from "../Decorators/log-tempo-de-execucao.js";
import { DiasDaSemana } from "../Enums/Dias-da-Semana.js";
import { Negociacao } from "../Models/negociacao.js";
import { Negociacoes } from "../Models/negociacoes.js";
import { NegociacoesServices } from "../Services/NegociacoesServices.js";
import { Imprimir } from "../Utils/Imprimir.js";
import { MensagemView } from "../Views/mensagem-view.js";
import { NegociacoesView } from "../Views/negociacoes-view.js";

export class NegociacaoController
{
    @domInjector('#data')
    private inputData: HTMLInputElement;
    @domInjector('#quantidade')
    private inputQuantidade: HTMLInputElement;
    @domInjector('#valor')
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes(); 
    private negociacoesView = new NegociacoesView('#negociacoesView');
    private mensagemView = new MensagemView('#mensagemView');
    private negociacoesService = new NegociacoesServices;

    constructor()
    {
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

    ImportaDados(): void
    {       
        this.negociacoesService
            .ObterNegociacoesDoDia()
            .then(NegociacoesDeHoje => {
                return NegociacoesDeHoje.filter(NegociacoesDeHoje => {
                    return !this.negociacoes
                    .ListarNegociacoes()
                    .some(negociacao => negociacao
                        .EhIgual(NegociacoesDeHoje)
                        );
                });
            })
            .then(NegociacoesDeHoje => {
                for (let negociacao of NegociacoesDeHoje){
                    this.negociacoes.Adiciona(negociacao);
                }
                this.negociacoesView.Update(this.negociacoes);
            });           
    }

    @Inspect()
    @LogarTempoExcecucao()
    Adiciconar(): void
    {
        const negociacao = Negociacao.CriaNegociacao(
            this.inputData.value, 
            this.inputQuantidade.value, 
            this.inputValor.value
        );
        if (!this.DiasUteis(negociacao.data))
        {
            this.mensagemView.Update('Não pode fazer transações em dias não uteis!!');
            return;
        }
        this.negociacoes.Adiciona(negociacao);
        Imprimir(negociacao, this.negociacoes);
        this.LimpaCampos();
        this.AtualizaView();
    }
}