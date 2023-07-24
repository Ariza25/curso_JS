//se apenas uma das condições deram true, o retorno será verdadeiro. Exemplo abaixo:

var idade = 16
var nome = 'João'

if(nome == 'João' || idade == 14){
    console.log('pode entrar na aula')
}else{
    console.log('não pode entrar na aula')
}

//porém, se as duas condições forem falsas, o retorno será negativo

if(nome == 'Pedro' || idade == 14){
    console.log('pode entrar na aula')
}else{
    console.log('não pode entrar na aula')
}

//juntando dois operadores lógico
//caso de true
if(nome == 'João' && 15 > 20 ||  10 == 10){
    console.log('entra');
}else{
    console.log('não entra')
}

//caso de false
if((nome == 'João' || 15 > 20)  && 10 == 12){
    console.log('entra');
}else{
    console.log('não entra')
}