import { Imprimivel } from "../Interfaces/Imprimivel.js";

export function Imprimir(...objetos: Imprimivel[])
{
    for(let objeto of objetos)
    {
        console.log(objeto.ParaTexto());
    }
}