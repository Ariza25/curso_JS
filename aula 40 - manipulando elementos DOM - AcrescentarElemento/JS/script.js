//criar elemento

var elemento = document.createElement("div");
elemento.classList = "div-criada";


//inserir elemento criado

var container = document.querySelector('#container'); //seleciona a div que vai na qual vai ser inserida o elemento criado
container.appendChild(elemento); //insere o elemento

console.log(elemento)

//segunda forma 

var elemento2 = document.createElement("div");
elemento2.classList = "div-before"; //div criada

var elemento3 = document.querySelector('#container .div-criada') //seleciona a última div do código

container.insertBefore(elemento2, elemento3); //o 2 foi a criada e o 3 a referência principal

console.log(elemento2);