//Métodos

//parsefloat 10.0 - lê uma string e transforma em floatnumber

console.log(parseFloat('12.999'));
console.log(Number.parseFloat('12.999'));

//parseInt - converte uma string em número inteiro ou pega um número float e transforma em int

console.log(parseInt('12.999'));
console.log(Number.parseInt(12.999));

//toFixed - limita as casas decimais de um número

console.log(23.512347.toFixed(2))

//isNaN - verifica se é um número ou não. A resposta é true or false

console.log(isNaN('teste'));
console.log(isNaN(12));
