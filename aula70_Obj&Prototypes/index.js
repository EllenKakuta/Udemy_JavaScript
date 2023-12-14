//
const pessoa ={
    nome: 'Ellen',
    sobrenome:'Kakuta'
};
console.log(pessoa);
//--------------------------------------------------------------------------------------
//as duas são a mesma coisa, podendo-se utilizar qual preferir
//--------------------------------------------------------------------------------------
const pessoa2 = new Object();
pessoa2.nome = 'Ellen';
pessoa2.sobrenome = 'Kakuta';
pessoa2.idade = 38;
// delete pessoa2.nome;
//objetos podem conter MÉTODOS(funções dentro do obejto que executam ações) - Vantagem: ter acesso as coisas do objeto dentro da função
pessoa2.falarNome = function(){
    return(`${this.nome} está falando seu nome`);
}
pessoa2.getDataNascimento = function(){
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}
pessoa2.falarNome();
console.log(pessoa2.getDataNascimento());

for( let chave in pessoa2){
    console.log(pessoa2[chave]);
}

//--------------------------------------------------------------------------------------
//Factory Functions  
function criaPessoa(nome, sobrenome){
    return{
        nome,
        sobrenome,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        }
    }
}
const p1 = criaPessoa('Ellen', 'Kakuta');
console.log(p1.nomeCompleto);

//---------------------------------------------------------------------------------------
//Constructor Functions
//criar objeto vazio pegar o this e atrelar ao objeto e retorna 

function Pessoa (nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}
const p2 = new Pessoa ('Marcelle', 'Kakuta');
const p3 = new Pessoa ('Ellen', 'Reis');
console.log(p2, p3);