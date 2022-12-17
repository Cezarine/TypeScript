export function domInjector(seletor) {
    return function (target, propertyKey) {
        let elemento = null;
        const vGetter = function () {
            if (!elemento) {
                elemento = document.querySelector(seletor);
            }
            return elemento;
        };
        Object.defineProperty(target, propertyKey, { get: vGetter });
    };
}
//# sourceMappingURL=DomInjects.js.map