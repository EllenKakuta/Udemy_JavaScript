/*
FUNÇÕES CONSTRUTORAS -> constrói objetos
função fábrica - fabrica objetos


Construtora-> inicia-se com letra maiúscula e o new é obrigatório -> Pessoa (new)

 */

function Pessoa(nome, sobrenome){
    //atributos ou métodos privados
    const ID = 123456;
    const modoInterno = function(){

    }

    //atributos ou métodos públicos
    this.nome = nome; //Pessoa.nome = nome
    this.sobrenome = sobrenome;
    this.metodo = function(){
        console.log(this.nome+': sou um método')
    };
}
const p1 = new Pessoa('Ellen', 'Kakuta');
const p2 = new Pessoa('Marcelle','Dias' );

console.log(p1.nome);
p1.metodo();