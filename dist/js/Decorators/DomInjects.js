export function domInjector(seletor) {
    return function (target, propertyKey) {
        console.log(`Modificando o ProType ${target.constructor.name} e Adicinando getter para a propriedade ${propertyKey}`);
        var elemento = null;
        const vGetter = function () {
            if (!elemento) {
                elemento = document.querySelector(seletor);
                console.log(`Buscando elemento do DOM com o seletor ${seletor} para injetar em ${propertyKey}`);
            }
            return elemento;
        };
        Object.defineProperty(target, propertyKey, { get: vGetter });
    };
}
