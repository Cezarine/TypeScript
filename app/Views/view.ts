export abstract class View<T>
{
    protected elemento: HTMLElement;
    constructor(seletor: string)// ? é a mesmo coisa que colocar igual
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

//    @Inspect()
//    @LogarTempoExcecucao(true)
    Update(pModel: T): void
    {
        let template = this.Template(pModel);       
        this.elemento.innerHTML = template;  
    }
}