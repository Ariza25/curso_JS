//métodos string

//muito utilizado para manipular strings que vêm direto do backend

var frase = "Esta é uma frase"

var fraseCaixaAlta = frase.toUpperCase();
var fraseCaixaBaixa = frase.toLowerCase();

console.log(fraseCaixaAlta);

//em caixa baixa
console.log(fraseCaixaBaixa);

//trim ignorar espaços

var nome = "      Matheus      "

var nomeTrim = nome.trim();

console.log(nomeTrim);

//split enviar um texto como array

console.log(frase.split(" "));

var tags = "PHP, Java, CSS, HTML"

console.log(tags.split(","));

//lastIndexof

var fraseDois = "Eu quero a última palavra teste desta frase de teste"

console.log(fraseDois.indexOf("teste")); //pega a primeira palavra teste na frase
console.log(fraseDois.lastIndexOf("teste")); //pega a última palavra teste na frase