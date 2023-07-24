//adicionar atributos

//selecionando tag

var title = document.querySelector('#title');

//inserir atributo classe

title.setAttribute('class', 'testando-atributo')

console.log(title)

//segundo exemplo

var btn = document.querySelector('#btn'); //seleciona o botão

btn.setAttribute('disabled', 'disabled') //elemento 'desabilitado' incluído

//terceiro exemplo

var subtitle = document.querySelector('.subtitle');

subtitle.setAttribute("id", "título-2");

console.log(subtitle);

//Remover atributos

var lista = document.querySelector('#lista')
lista.removeAttribute('id');

console.log(lista);