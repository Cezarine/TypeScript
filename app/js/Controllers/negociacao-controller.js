var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView('#negociacoesView');
        this.mensagemView = new MensagemView('#mensagemView');
        this.negociacoesService = new NegociacoesServices;
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
    ImportaDados() {
        this.negociacoesService
            .ObterNegociacoesDoDia()
            .then(NegociacoesDeHoje => {
            return NegociacoesDeHoje.filter(NegociacoesDeHoje => {
                return !this.negociacoes
                    .ListarNegociacoes()
                    .some(negociacao => negociacao
                    .EhIgual(NegociacoesDeHoje));
            });
        })
            .then(NegociacoesDeHoje => {
            for (let negociacao of NegociacoesDeHoje) {
                this.negociacoes.Adiciona(negociacao);
            }
            this.negociacoesView.Update(this.negociacoes);
        });
    }
    Adiciconar() {
        const negociacao = Negociacao.CriaNegociacao(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        if (!this.DiasUteis(negociacao.data)) {
            this.mensagemView.Update('Não pode fazer transações em dias não uteis!!');
            return;
        }
        this.negociacoes.Adiciona(negociacao);
        Imprimir(negociacao, this.negociacoes);
        this.LimpaCampos();
        this.AtualizaView();
    }
}
__decorate([
    domInjector('#data')
], NegociacaoController.prototype, "inputData", void 0);
__decorate([
    domInjector('#quantidade')
], NegociacaoController.prototype, "inputQuantidade", void 0);
__decorate([
    domInjector('#valor')
], NegociacaoController.prototype, "inputValor", void 0);
__decorate([
    Inspect(),
    LogarTempoExcecucao()
], NegociacaoController.prototype, "Adiciconar", null);
//# sourceMappingURL=negociacao-controller.js.map