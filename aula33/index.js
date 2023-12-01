/*
AULA SOBRE ATRIBUIÇÃO VIA DESESTRUTURAÇÃO (OBJETOS)
*/

const pessoa ={
    nome: 'Ellen',
    sobrenome: 'Kakuta',
    idade:38,
    endereco:{
        rua:'Estrada dos Fernandes',
        numero:2000
    }
};
//atribuição via desestruturação, está retirando a inforação desejada do objeto criado
// const {nome} = pessoa; 
const {nome, sobrenome} = pessoa;
console.log(nome, sobrenome);
const {endereco:{rua, numero}, endereco} = pessoa;
console.log(rua);
console.log(rua, numero);
console.log(endereco);
const{idade, ...resto}= pessoa;
console.log(resto);