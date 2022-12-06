export class View {
    elemento;
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    Update(pModel) {
        const template = this.Template(pModel);
        this.elemento.innerHTML = template;
    }
}
