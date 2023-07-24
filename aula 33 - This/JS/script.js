//This - sempre se refere ao escopo global window quando fora dos escopos locais
//No objeto, o This irá acessar propriedades deste objeto

console.log(this) //refere-se ao window

let pessoa = {
    nome: "Matheus",
    idade: 29,
    falar: function(){
        console.log("olá, tudo bem?")
    },
    dizerNome: function(){
        console.log("O meu nome é: " + this.nome); // this aqui refere-se a propriedade do objeto - exibe valor
    },
    aniversario: function(){
        this.idade += 1; //this aqui altera o valor da propriedade do objeto
    },
    saudacao: function(){
        return "Sr. " + this.nome
    }
};

pessoa.dizerNome();
pessoa.aniversario();
console.log(pessoa.idade);

var sdc = pessoa.saudacao();
console.log("Olá, " + sdc);