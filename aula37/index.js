/*
FOR OF - ESTRUTURA DE REPETIÇÃO
*/

//            01234...
// const nome = 'Ellen Kakuta';
const nome = ['Ellen', 'Kakuta', 'Dias']

for(let i = 0; i < nome.length; i++){
    console.log(nome[i]);
}
console.log('-----------');

for (let i in nome){
    console.log(nome[i]);
}
console.log('-----------');
//em ambos é necessário indicar o índice


for (let i of nome){
    console.log(i);
}
console.log('-----------');

// nome.forEach(function(elemento, indice, array){
//     console.log(elemento, indice, array)
// }); - Estudo de aula futura


//para objetos
const pessoa = {
    nome: 'Ellen',
    sobrenome: 'Kakuta'
};

for(let i in pessoa){
    console.log(i, pessoa[i]);
}

//  --> NÃO É POSSÍVEL, POIS NÃO É ITERÁVEL
/*
For clássico - Geralmente com iteráreis (array ou strings)
For in - Retorna o índice ou chave (string, array ou objetos)
For of - Retorna o valor em si (iteráveis, array ou strings)
*/
