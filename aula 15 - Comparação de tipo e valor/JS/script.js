//2 iguais verificam o valor independente o tipo do dado (se for número ou texto)

var numero = 5;
var numero2 = '5';

if(numero == 5){
    console.log('O número é 5')
}

//3 iguais verificam o valor e também o tipo de dado (deve ser número e número por exemplo)
if(numero === 5){
    console.log('O número é 5') //true
}
if(numero2 === 5){
    console.log('O número é 5') //false
}

//! e 2 iguais verificam o valor e também o tipo de dado de forma negativa (deve ser número e outro tipo de dado por exemplo)

var numero3 = 'seis'

if(numero3 !== 6){
    console.log('O número é: ' + numero3) //true
}

if(numero3 !== 'seis'){
    console.log('O número é: ' + numero3) //false não irá imprimir na tela
}

//os 3 iguais são muito utilizados, principalmente em códigos maiores