//let e const são nomes para variáveis pois separam-nas por escopos menores
//let por tanto, é mutável no código podendo ter valores diferentes nos escopos globais e locais
let x = 5 // assemelha a var = 5

x = 12

console.log(x)

if(true){
    let x = 20;
    console.log(x);
}

console.log(x)

//por sua vez, const é imutável. Portanto o código abaixo apresenta erro:
//Mas da mesma forma, caso estejam em escopos locais diferentes, não geral erros.

const y = 12

y = 13;

console.log(y)

//outro exemplo de let

for(let x = 0; x < 10; x++);{
    console.log(x);
}