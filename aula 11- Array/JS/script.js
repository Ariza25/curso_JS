//array é uma forma de objeto, porém é mais utilizado como lista contendo o mesmo tipo de dado
//por exemplo: array de number: 0,2,4,6,8...

//sintaxe do array:

/* var arr = []*/

var arr = [5, 'Matheus', true, {teste: 1, teste: 2}];

//como dito, pode conter diversos tipos de variáveis, mas o mais comumente usado é:

var arr2 = ['Matheus', 'Pedro', 'Miguel', 'Lucas'];

console.log(arr, arr2);

//para acessar os índices do array, o número sempre começa em 0, assim como na linguagem C

console.log(arr[1], arr2[1]);

//para inserir elemento no array:

arr2[5] = 'Marcos';
arr2[0] = 'João';

console.log(arr2);