//acessando o dom por tag

var titulo = document.getElementsByTagName('h1'); //sintaxe

console.log(titulo[0]); //acessar 0 como em array para pegar apenas o primeiro h1 da página

var lis = document.getElementsByTagName('li');

console.log(lis); //acessa todas as lis presentes na página
console.log(lis[3]); //acessa a terceria propriedade li do array

//acessando o dom por id.

var paragrafo = document.getElementById('paragrafo') //acesso de casos únicos
console.log(paragrafo);

//acessando o dom por classe
//acessar um conjunto de atributos 

var itensDaLista = document.getElementsByClassName('item');
console.log(itensDaLista);