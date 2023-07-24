//métodos e propriedades são comuns no JavaScript, transformando os tipos de dados
//característica principal do objeto é que o bloco de código abre e fecha com chaves
let pessoa = {
    nome: 'Matheus',
    idade: 29,
    falar: function(){ //método do objeto
        console.log("Olá, tudo bem?");
    },
    soma: function(a,b){
        return a + b;
    }
};

console.log(pessoa.nome)

pessoa.falar();

var soma = pessoa.soma(2,2);
console.log(soma)
