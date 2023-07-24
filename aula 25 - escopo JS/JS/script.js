//escopo global e escopo local

//escopo global está fora das chaves
var x = 1;
var y = 3;

console.log(x, y)

//escopo local está dentro das chaves como nas funções

function teste(){
    var z = 0;

    console.log(z);
// é possível acessar o escopo global dentro dos escopos locais
    console.log(x);
    console.log(y)

}

teste()

//Por sua vez, não é possível acessar o escopo local no escopo global. Exemplo:
//Acessar a variável z fora da função

//console.log(z)

//As variáveis por mais que idênticas também não se misturam caso estejam em escopos locais diferentes. Exemplo

function testando(){
    var z = 1
    console.log(z)
}

testando();