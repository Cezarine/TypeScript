import { View } from "./view.js";
export class MensagemView extends View {
    Template(pModel) {
        return `<p class="alert alert-info">${pModel}<p>`;
    }
}
