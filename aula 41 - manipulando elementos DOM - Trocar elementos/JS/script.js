//criar elemento

var elemento = document.createElement('h3');
elemento.classList = "testando-classe";

var texto = document.createTextNode('Este é o texto do h3')

elemento.appendChild(texto)

console.log(elemento)

//selecionar o elemento que quero trocar 
var title = document.querySelector('#title')

//selecionar o pai do elemento
var body = document.querySelector('body') //outro modo de selecionar o parent é: var pai = title.parentNode;

//trocar os elementos
body.replaceChild(elemento, title);