import { NegociacaoController } from "./Controllers/negociacao-controller.js";
const controller = new NegociacaoController();
const form = document.querySelector('.form');
const vBotaoImporta = document.querySelector('#botao-importa');
if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.Adiciconar();
    });
}
else {
    throw Error('Não foi possivel inicializar a aplicação!');
}
if (vBotaoImporta) {
    vBotaoImporta.addEventListener('click', () => {
        controller.ImportaDados();
    });
}
else {
    throw Error('Botão Importa não foi encontrado');
}
//# sourceMappingURL=app.js.map