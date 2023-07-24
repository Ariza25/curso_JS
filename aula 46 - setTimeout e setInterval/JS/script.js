//executa após determinado tempo. Adicionar um pop-up por exemplo ou receber dados de API
//sintaxe abaixo:

//callback assíncrona

console.log("antes do setTimeout"); //execução imediata

setTimeout(function(){

    console.log("dps do setTimeout");

}, 2000); //execução após 2 segundos

//setInterval

setInterval(function(){

    console.log("testando setInterval");

},2000); //espécie de loop.Deve-se criar um break para não travar o navegador