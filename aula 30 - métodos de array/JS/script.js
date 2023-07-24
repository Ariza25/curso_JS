//métodos array
//length - mostra o comprimento do array

var arr = [1,2,3,4,5];

console.log(arr.length);

//push - adiciona elementos ao fim do array
arr.push(6);
arr.push('Matheus');

console.log(arr);

//pop - remove elemento do fim do array

arr.pop();
console.log(arr);

// unshift adiciona ao início do array

arr.unshift(0);
arr.unshift('teste');

console.log(arr)

//shift - retira elemento do início do array

arr.shift();
console.log(arr);

//length - acessar elemento do array da direita para a esquerda

console.log(arr[arr.length - 2]);

//isArray - verifica se é um array

console.log(Array.isArray(5)); //false
console.log(Array.isArray(arr)); //true
