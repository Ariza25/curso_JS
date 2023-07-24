//clearTimeout na prática
var x = 0;

var myTimer = setTimeout(function(){
    console.log("O x é igual a: 0")
},1500);

// o x agora não é mais zero, portanto, temos parar a execução do setTimeout para que o novo valor seja utilizado. Caso hipotético.
x = 5;

if(x > 0);
    clearTimeout(myTimer);
    console.log("O x passou de 0: " + x);

//clearInterval na prática
//Eliminar os intervalos do código setados anteriormente

var myInterval = setInterval(function(){
    console.log("imprimindo interval");
}, 500)

//criar o break do loop internval

setTimeout(function(){
    console.log("Não precisamos mais do interval");
    clearInterval(myInterval);
}, 1500); //dps de 1,5s o interval não é mais executado.