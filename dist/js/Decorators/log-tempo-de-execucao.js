export function LogarTempoExcecucao(pSegundos = false) {
    return function (target, propertyKey, descriptor) {
        const vMetodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            let vDivisor = 1;
            let vUnidade = 'milisegundos';
            if (pSegundos) {
                vDivisor = 1000;
                vUnidade = 'segundos';
            }
            const t1 = performance.now();
            const vRetorno = vMetodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`${propertyKey}, tempo de execução:  ${(t2 - t1) / vDivisor} ${vUnidade}`);
            return vRetorno;
        };
        return descriptor;
    };
}
