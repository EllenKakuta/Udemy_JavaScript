/*
FILTRANDO ARRAY
FILTER -> Sempre vai retornar um array, com a mesma quantidade de elementos ou menos

*/

//Retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// function callbackFilter (valor){
//    return valor > 10
   
// }
// const numerosFiltrados = numeros.filter(callbackFilter);
// console.log(numerosFiltrados);

//é possível fazer a função de forma anônima
// const numerosFiltrados = numeros.filter(function(valor){
//     return valor > 10;
// });
// console.log(numerosFiltrados);

//arrow function
const numerosFiltrados = numeros.filter(valor => valor > 10);
console.log(numerosFiltrados);

//-------------------------------------------------------------------------------------

//Retorne as pessoas que tem o nome com 5 letras ou mais
//Retorne as pessoas com mais de 50 anos
//Retorne as pessoas cujo nome termina com A
const pessoas=[
    {nome:'Luiz', idade: 62},
    {nome:'Maria', idade: 23},
    {nome:'Eduardo', idade: 55},
    {nome:'Letícia', idade: 19},
    {nome:'Rosana', idade: 32},
    {nome:'Wallace', idade: 47},
];
const pessoasComNomeGrande = pessoas.filter(function(valor){return valor.nome.length >= 5});
const pessoasComMaisDeCinquenta = pessoas.filter(function(valor) {return valor.idade >50});
const pessoasNomeTerminaComA = pessoas.filter(function(valor){return valor.nome.toLowerCase().endsWith('a')});
console.log(pessoasComNomeGrande);
console.log(pessoasComMaisDeCinquenta);
console.log(pessoasNomeTerminaComA);