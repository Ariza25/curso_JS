//condição para repetir um bloco de código

/* sintaxe
while(){

}
*/

var x = 0
while(x < 5){
    console.log('testando repetição ' + x)
    //incrementador para não ser cair no looping infinito
    x++; //vai sempre acrescentar um número no código acima
}

//passando por cada elemento do array
var arr = ['teste', 'testando', 'a', 'b'];
var y = 0;

while(y <= 3){
    console.log(arr[y]);
    y++;
}

//passando por cada letra da palavra

var palavra = 'matheus'
var i = 0;

while(i <= 6){
    console.log(palavra[i]);
    i++;
}