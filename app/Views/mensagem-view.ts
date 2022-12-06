import { View } from "./view.js";

export class MensagemView extends View<string>
{
    protected Template(pModel: string): string
    {
        return `<p class="alert alert-info">${pModel}<p>`;        
    }
}