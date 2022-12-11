var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Scape } from "../Decorators/Scape.js";
import { View } from "./view.js";
export class NegociacoesView extends View {
    FormatarData(data) {
        return new Intl.DateTimeFormat().format(data);
    }
    Template(pModel) {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th> DATA </th>
                    <th> QUANTIDADE </th>
                    <th> VALOR </th>
                </tr>
            </thead>
            <tbody>
                ${pModel.ListarNegociacoes().map(negociacao => {
            return `
                            <tr>
                                <td>${this.FormatarData(negociacao.data)}</td>
                                <td>${negociacao.quantidade}</td>
                                <td>${negociacao.valor}</td>
                            </tr>
                        `;
        }).join('')}
            </tbody>
        </table>
        `;
    }
    Update(pModel) {
        const template = this.Template(pModel);
        this.elemento.innerHTML = template;
    }
}
__decorate([
    Scape()
], NegociacoesView.prototype, "Template", null);
