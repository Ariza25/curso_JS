//mapear ações do usuário do site. Evento de hover
//mouseover
var title = document.querySelector("#title");

title.addEventListener("mouseover", function(){
    this.style.backgroundColor = "blue"
});

//mouseout

title.addEventListener("mouseout", function(){
    this.style.backgroundColor = "white"
});

//afetar outro elemento com hover
//retirar a classe de um elemento
var subtitle = document.querySelector(".subtitle");
subtitle.addEventListener("mouseover", function(){
    var legenda = document.querySelector("#legenda");

    legenda.classList.remove("hide");

    subtitle.addEventListener("mouseout", function(){
    legenda.classList.add("hide");
});
});
