//acessando o dom como comportamento do CSS, ou seja, com classes parents e child

//acessando normalmente pega todos os elementos da class item

var itensClasse = document.getElementsByClassName('item'); //sintaxe
console.log(itensClasse);

//porém, é possível acessar apenas a segunda lista com Query

var itensQuery2 = document.querySelectorAll('#lista2 li') //defini-se o id e a tag/classe desejada

console.log(itensQuery2);

//para acessar a primeira lista por exemplo

var itensQuery = document.querySelectorAll('#lista li') //defini-se o id e a tag/classe desejada

console.log(itensQuery);

//Por sua vez, o QuerySelector é single, portanto, usa-se mais para id ou casos específicos. Exemplo:

var lista = document.querySelector('#lista2');
console.log(lista)

var itemUnico = document.querySelector('#lista2 .item'); // no caso foi selecionado o item 5 da lista2
console.log(itemUnico)

//selecionado span

var span = document.querySelector('#paragrafo span');
console.log(span);

