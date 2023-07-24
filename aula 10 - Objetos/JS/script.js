/* tipos de dados:
number
string
boolean
null
undefined
object
*/

/*Objetos guardam variedades de valores dentro da mesma variável, 
como em um array (formato de tabela com linhas e colunas)
sintaxe do objeto:

var obj = {

}
*/

var obj ={
    nome: 'Matheus',
    idade: 27,
    profissao: 'programador',
    estaTrabalhando: false,
}

console.log(obj);
console.log(typeof obj);

//acessar apenas uma característica do obj:

console.log(obj.nome);
console.log(obj.profissao);


//concatenação dos objetos em uma frase
console.log("O meu nome é: " + obj.nome + ". Tenho " + obj.idade + " anos de idade!");

//mudando variável do objeto

obj.nome = "Pedro";

console.log(obj.nome);

//cruindo nova variável mesmo fora do obj

obj.graduacao = true;

console.log(obj.graduacao);

