//se o if for negativo, podemos acrescentar o else como abaixo:
var nome = 'Adamastor'

if(nome == 'Pedro'){
    console.log("O nome é: " + nome);
}else{
    console.log("O nome é: " + nome)
}

//caso for verdadeiro o if, ele executará apenas a primeira parte do comando acima.

//já no else if é como se adicionasse outra possibilidade ao if, fazendo outra verificação conjunta (segunda checagem)
if(nome == 'Pedro'){
    console.log("O nome é: " + nome);
}else if(nome == 'Matheus'){
    console.log("O nome é: " + nome)
}else{
    console.log("O nome é: " + nome)
}

//no caso acima, como a var é Adamastor, o último código apenas que preenche os requisitos