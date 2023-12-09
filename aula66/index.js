/*
FUNÇÃO MAP
*/

//Dobre os números
const numeros = [5, 50, 80, 1, 2, 3, 8, 7, 11, 15, 22, 27];
const numerosEmDobro = numeros.map(function(valor){
   return valor*2
});
console.log(numerosEmDobro);

//-------------------------------------------------------------------------------------
//Para cada elemento:
//Retorne apenas uma sring com o nome da pessoa
//Remova apenas a chave 'nome' do objeto
//Adiciona uma chave id em cada objeto
const pessoas=[
    {nome:'Luiz', idade: 62},
    {nome:'Maria', idade: 23},
    {nome:'Eduardo', idade: 55},
    {nome:'Letícia', idade: 19},
    {nome:'Rosana', idade: 32},
    {nome:'Wallace', idade: 47},
];
const nomes = pessoas.map(function(obj){
    return obj.nome;
})
const idades = pessoas.map(function(obj){
    return {idade: obj.idade};
})
//ou
// const idades2 = pessoas.map(function(obj){
//     delete obj.nome;
//     return obj;
// })
const id = pessoas.map(function(obj, indice){
    const newObj = {...obj}; //feita uma cópia para que não haja alteração no objeto original
    newObj.id = (indice + 1) *1000
   
    return newObj;
})
console.log(nomes);
console.log(idades);
console.log(idades2);
console.log(id);
// console.log(pessoas);