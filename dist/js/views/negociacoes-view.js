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
