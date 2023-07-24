//mapear ações do usuário do site. Evento de clique

var btn = document.querySelector("#btn"); //seleciona o botão

console.log(btn);

//sintaxe:
btn.addEventListener("click", function(){ //evento de clique e uma callback para realizar determinada ação
    console.log("clicou");
    console.log(this) //this dentro do evento vira o próprio evento, ou seja, this se tornou o btn neste contexto
    this.style.color = "red"; //altera a cor do botão para vermelho.
});

//evento de click no título

var title = document.querySelector("#title")
title.addEventListener("click", function(){
    console.log("teste");
    console.log(this);
    this.style.color = "red";
});

var subtitle = document.querySelector(".subtitle")
title.addEventListener("click", function(){
    subtitle.style.display = "none";
});

//double click

var subtitle = document.querySelector(".subtitle");

subtitle.addEventListener('dblclick', function(){
    console.log("clique duplo");
});