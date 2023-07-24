//if com comparações

var idade = 18;
var possuiCarro = 0; //não funciona pois o 0 entende-se como falso - Terceiro if

if(idade >= 18){
    console.log("O usuário pode fazer a carteira");
}

if(idade <= 17){
    console.log("O usuário não pode fazer a carteira")
}

if(possuiCarro){
    console.log("O usuário já pode andar de carro")
}

var nome = 'Pedro'; // um = significa recebe ou atribui
if(nome == 'Matheus'){ //dois == significa literalmente igual - igualdade
    console.log("O seu nome é Matheus");
}

if(nome != 'Matheus'){ //!= significa diferente
    console.log("O seu nome não é Matheus");
}

if(20 > 10){
    console.log('Passou');
}
if(20 < 10){
    console.log('Passou');
}