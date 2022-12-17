export function Scape() {
    return function (target, propertyKey, descriptor) {
        const vMetodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            let vRetorno = vMetodoOriginal.apply(this, args);
            if (typeof vRetorno === 'string') {
                console.log(`@Scape em ação na classe: ${this.constructor.name} no método: ${propertyKey}`);
                vRetorno = vRetorno.replace(/<script>[\s\S]*?<\/script>/, '');
            }
            return vRetorno;
        };
        return descriptor;
    };
}
//# sourceMappingURL=Scape.js.map