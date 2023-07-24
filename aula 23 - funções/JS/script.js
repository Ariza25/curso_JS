//funções são blocos de códigos reutilizáveis.

/*sintaxe
function primeiraFuncao(){
}*/

function primeiraFuncao(){ //função criada
    console.log('hello')
}

//chamando função
primeiraFuncao();
primeiraFuncao();
primeiraFuncao();

//função com argumentos

function dizerNome(nome){
    console.log('O nome é: ' + nome)
}

dizerNome('Matheus');
dizerNome('Pedro');
dizerNome('João');

//recebendo nome de forma dinâmica

var nomeDoBancoDeDados = "Jesus"

dizerNome(nomeDoBancoDeDados);

//return função soma

function soma(a,b){  //parâmetros são separados por vírgula
    //return a + b 
    //ou
    var soma = a + b;
    return soma;
}

//utilizando o retorno e chamando a função soma para realizar contas:
var somaUm = soma(2, 5);
console.log(somaUm);

var somaDois = soma(10,25);
console.log(somaDois);