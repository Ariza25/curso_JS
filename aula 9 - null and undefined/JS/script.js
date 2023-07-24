/* tipos de dados:
number
string
boolean
null
undefined
object
*/

//null e undefined são considerados tipos de dados no JS

// null é um tipo de dado que representa um valor apesar de vazio
// undefined é um tipo de dado que representa um valor não atribuído à variável


//Null portanto cria um espaço vazio que será preenchido dps mais a frente no código.
var nome = null;

console.log(nome);

nome = "Matheus";
console.log(nome);

//por sua vez caso a variável seja criada, mas nenhum valor seja colocado, caracteriza-se então como undefined (não definida)

var sobrenome;
console.log(sobrenome);

//conceito de Hoisting (içamento) As funções e variáveis são iniciadas sempre no início do código, portanto, sempre colocar a vairável primeiro que a função.

