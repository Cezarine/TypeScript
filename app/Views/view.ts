export abstract class View<T>
{
    protected elemento: HTMLElement;
    private escapar: boolean = false;
    constructor(seletor: string, escapar?: boolean)// ? é a mesmo coisa que colocar igual
    {
        const elemento = document.querySelector(seletor);
        if(elemento)
        {
            this.elemento = <HTMLInputElement>elemento;
        }
        else    
            throw Error('View não foi criada');  
    }

    protected abstract Template(pModel: T): string;

    Update(pModel: T): void
    {
        let template = this.Template(pModel);
        if(this.escapar)
        {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.elemento.innerHTML = template;  
    }
}