//mapear ações do usuário do site. Evento de tecla
//keydown
document.addEventListener("keydown", function(event){

 if(event.key === "Enter"){
    console.log("Apertou Enter");
 }
});

//keyup - mais interessante de usar
document.addEventListener("keyup", function(e){
    console.log("Soltou o Enter");
});