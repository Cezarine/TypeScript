import { NegociacaoController } from "./Controllers/negociacao-controller.js";

const controller = new NegociacaoController();

const form = document.querySelector('.form');

if  (form)
{
    form.addEventListener('submit', event=>
    {
        event.preventDefault();
        controller.Adiciconar();
    });
}
else
{
    throw Error('Não foi possivel inicializar a aplicação!');
}

