/*
Objetc.values
Object.entries
Object.ãssign(des, any)
Object.getOwnPropertyDescriptor(o, 'prop')
... (spread)

JÁ VISTO
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)


*/

const produto = { 
    nome: 'caneca',
    preco: 1.8,
};
const caneca = {...produto, material:'porcelana'};//spread copia o produto, não ===
const caneca2 = Object.assign({}, produto, {material: 'porcelana'});//copia para o objeto vazio
caneca.nome = 'kjlkjl'
caneca.preco = 3.5
console.log(produto);
console.log(caneca);
console.log(caneca2);
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
console.log(Object.values(produto));
console.log(Object.entries(produto));

for (let entry of Object.entries(produto)){
    console.log(entry);
}



 