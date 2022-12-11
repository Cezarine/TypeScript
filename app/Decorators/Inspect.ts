export function Inspect()
{
    return function( target: any, propertyKey: string, descriptor: PropertyDescriptor)
    {
        const vMetodoOriginal = descriptor.value;
        descriptor.value = function(...args: Array<any>)
        {
            console.log(`---- Método: ${propertyKey}`);
            console.log(`----- Parâmetros: ${JSON.stringify(args)}`);           
            const retorno = vMetodoOriginal.apply(this, args);
            console.log(`------ Retorno: ${JSON.stringify(retorno)}`);
            return retorno;
        }
        return descriptor;
    }
}