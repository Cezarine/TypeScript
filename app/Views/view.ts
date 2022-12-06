export abstract class View<T>
{
    protected elemento: HTMLElement;
    constructor(seletor: string)
    {
        this.elemento = document.querySelector(seletor);
    }

    protected abstract Template(pModel: T): string;

    Update(pModel: T): void
    {
        const template = this.Template(pModel);
        this.elemento.innerHTML = template;  
    }
}