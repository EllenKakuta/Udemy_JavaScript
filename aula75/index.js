
// new Object -> Object.prototype
const objA = {
    chaveA: 'A'
// ___proto___ : Object.prototype
};
// new Object -> Object.prototype
const objB = {
    chaveB: 'B'
// ___proto___ : objA
};

const objC = new Object();
objC.chaveC = 'C';
Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);
console.log(objC.chaveA);
//----------------------------------------------------------------------------------------
function Produto (nome, preco){
    this.nome = nome;
    this.preco = preco;
}
Produto.prototype.desconto = function (percentual){
    this.preco = this.preco - (this.preco * (percentual/100)); 
};
Produto.prototype.aumento = function (percentual){
    this.preco = this.preco + (this.preco * (percentual/100));

};

const p1 = new Produto ('camiseta', 10);
// p1.desconto(50);
p1.aumento(75);

const p2 = {
    nome: 'Caneca',
    preco: 15,
};
Object.setPrototypeOf(p2, Produto.prototype);
p2.aumento(25);


const p3 = Object.create(Produto.prototype);
p3.preco = 113;
p3.aumento(10);



console.log(p1);
console.log(p2);
console.log(p3)