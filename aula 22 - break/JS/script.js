//continue pula para a próxima execução, enquanto o break para o código em determinado momento

for(var i = 10; i > 0; i--){
    console.log(i)

    if(i === 5){
        break;
    //quando chegar a 5 ele para o código e executa o console log
    }
}

console.log("break");

//exemplo de continue

var x = 10
while(x < 100){
    x+=10

    if(x === 60 || x === 90){
    console.log('continue')
        continue; //continue não mostrará a mensagem abaixo de console
    }

    console.log('testando loop ' + x);
}