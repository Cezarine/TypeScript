export function domInjector(seletor: string)
{
    return function(target: any, propertyKey: string)
    {
        //console.log(`Modificando o ProType ${target.constructor.name} e Adicinando getter para a propriedade ${propertyKey}`);
        let elemento: HTMLElement | null = null;
        const vGetter = function()
        {
            if ( !elemento )
            {
                elemento = <HTMLElement>document.querySelector(seletor);
                //console.log(`Buscando elemento do DOM com o seletor ${seletor} para injetar em ${propertyKey}`);
            }
            return elemento;
        }
        // Esse Object.defineProperty faz a propriedade (propertyKey) ser essa função vGetter.
        // Ou seja, quando eu for acessar a propertyKey na verdade estou acessando a função vGetter,
        // que busca o meu elemento do DOM. 
        Object.defineProperty(target, propertyKey, {get: vGetter}); 
    }
}