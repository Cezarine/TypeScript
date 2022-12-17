import { Comparavel } from "./Comparavel";
import { Imprimivel } from "./Imprimivel";

export interface Modelo<T> extends Imprimivel, Comparavel<T>
{
    
}