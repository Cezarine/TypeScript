export class View {
    elemento;
    escapar = false;
    constructor(seletor, escapar) {
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento;
        }
        else
            throw Error('View não foi criada');
    }
    Update(pModel) {
        let template = this.Template(pModel);
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.elemento.innerHTML = template;
    }
}
