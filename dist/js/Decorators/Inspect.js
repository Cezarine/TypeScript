export function Inspect() {
    return function (target, propertyKey, descriptor) {
        const vMetodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            console.log(`---- Método: ${propertyKey}`);
            console.log(`----- Parâmetros: ${JSON.stringify(args)}`);
            const retorno = vMetodoOriginal.apply(this, args);
            console.log(`------ Retorno: ${JSON.stringify(retorno)}`);
            return retorno;
        };
        return descriptor;
    };
}
//# sourceMappingURL=Inspect.js.map