//modificar strings 

var title = document.querySelector('#title');
console.log(title);
var subtitle = document.querySelector('.subtitle');
console.log(title);

//innerHTML
title.innerHTML = 'Testando o texto alterado!';

//textContent -> mais utilizado e recomendado pela comunidade
subtitle.textContent = 'Texto alterado 2';