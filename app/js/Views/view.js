export class View {
    constructor(seletor) {
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento;
        }
        else
            throw Error('View não foi criada');
    }
    Update(pModel) {
        let template = this.Template(pModel);
        this.elemento.innerHTML = template;
    }
}
//# sourceMappingURL=view.js.map