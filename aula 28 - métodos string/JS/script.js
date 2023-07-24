//Métodos

//length - mostra as o número de propriedades de uma string, array e afins. Exemplo:

var nome = 'Matheus';

console.log(nome.length)

var obj = 'bola'

console.log(obj.length)

//indexOf - encontra o posicionamento de uma propriedade

var frase = 'O rato roeu a roupa do rei de Roma'

console.log(frase.indexOf('roeu'));

//slice - retira uma propriedade requerida. No caso a palavra roeu é extraída da var frase. Exemplo:

var roeu = frase.slice(7, 11);
console.log(roeu);

//replace - substitui propriedade

var novaFrase = frase.replace('roeu', 'teste')
console.log(novaFrase);
