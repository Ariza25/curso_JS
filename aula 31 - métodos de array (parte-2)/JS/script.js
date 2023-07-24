//métodos de array

//splice - adicionar elementos no meio do array

var arr = [1,2,3,4,5];
arr.splice(2, 0, 999); //sintaxe adicionando 999 entre o número 2 e 3

console.log(arr);

arr.splice(4, 1); //removendo o elemento 4

console.log(arr);

//indexOf

console.log(arr.indexOf(5)); //busca o índice do elemento 5 no array

//join - transforma array em string

var arr2 = ["o", "rato", "roeu", "a", "roupa"];

console.log(arr2.join(","));

//reveser - inverte os elementos de ordem

console.log(arr2.reverse());
