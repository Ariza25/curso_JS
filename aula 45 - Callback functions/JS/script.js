//executar uma ação dps de uma função
function exibir(num){
    console.log("A operação resultou em: " +num);
}

function soma(a, b, callback){
    var op = a + b;
    callback(op);
}

function multipliacao(a, b, cb ){ //callback também é chamado de cb
    var op = a * b;
    cb(op);
}

soma(2,2, exibir);
multipliacao(2,4, exibir);