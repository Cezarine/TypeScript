import { Scape } from "../Decorators/Scape.js";
import { Negociacoes } from "../Models/negociacoes.js";
import { View } from "./view.js";

export class NegociacoesView extends View<Negociacoes>
{
    private FormatarData(data: Date): string 
    {
        return new Intl.DateTimeFormat().format(data)
    }
    @Scape()
    protected Template(pModel: Negociacoes): string {
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

    Update(pModel: Negociacoes): void {
        const template = this.Template(pModel);
        this.elemento.innerHTML = template;
    }
}