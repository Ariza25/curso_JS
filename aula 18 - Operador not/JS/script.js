//operador not ! troca a operação para o contrário, criando uma versão negativa
//os valores se invertem
if(!true){
    console.log('passou')
}

if(!false){
    console.log('passou')
}

//exemplo

var nome = 'Matheus'

if(!(nome == 'João')){
    console.log('passou')
}else{
    console.log('não passou')
}