import { NegociacaoController } from "./Controllers/negociacao-controller.js";
import { NegociacoesView } from "./Views/negociacoes-view.js";

const controller = new NegociacaoController();

const form = document.querySelector('.form');

form.addEventListener('submit', event=>
{
    event.preventDefault();
    controller.Adiciconar();
});
