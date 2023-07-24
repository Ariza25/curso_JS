//inserir strings

var novoParagrafo = document.createElement("p"); //criar a tag
var texto = document.createTextNode("Este é o texto") //criando o texto 

novoParagrafo.appendChild(texto); //inserindo o texto dentro da tag

var body = document.querySelector("body"); //selecionando o body do site
body.appendChild(novoParagrafo) //inserindo a tag no body do site

console.log(novoParagrafo);

// Inserir parágrafo dentro de uma div específica

var container = document.querySelector(".container"); //seleciona a div
var elemento = document.createElement("span") //cria a tag
elemento.appendChild(document.createTextNode("texto do span")) // insere e cria o texto na tag

container.appendChild(elemento); // insere a tag dentro da div
console.log(container) //demonstra o resultado