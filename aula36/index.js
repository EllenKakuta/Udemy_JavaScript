/*
-> DOM E A ÁRVORE DO DOM - DOCUMENT OBJECT MODEL

-> FOR IN - ESTRUTURA DE REPETIÇÃO

*/

const frutas = ['pera', 'maçã', 'uva'];

// for(i = 0; i < frutas.length; i++){
//     console.log(frutas[i]);
// }


// FOR IN -> lê os índices ou chaves do objeto
for ( let indice in frutas){ 
    // console.log(i);
    console.log(frutas[indice]);
}
//-----------------------------------------------------------------------------

const pessoa = {
    nome: 'Ellen',
    sobrenome: 'Kakuta',
    idade: 38
};
// console.log(pessoa.nome);
// console.log(pessoa['nome']);

for (let i in pessoa){
    console.log(i, pessoa[i]);
}