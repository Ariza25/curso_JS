//removendo elemento filho

var container = document.querySelector('#container') //seleciona o elemento
var p = document.querySelector('#container p'); //seleciona a tag dentro do elemento pai

container.removeChild(p) //remoção do parágrafo da div container

//remover o elemento pai

var subtitle = document.querySelector('.subtitle');
subtitle.remove();