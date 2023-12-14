// defineProperty - defineProperties

function Produto (nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;
    // this.estoque = estoque;- ALTERAR ESTADO DESSA PROPRIEDADE

    Object.defineProperty(this, 'estoque',{ //this indica o objeto que esta sendo criado, 'estoque' é a propriedade que quero trabalhar
        enumerable: true,//o enumerable é para que 'estoque' seja exibido - exibe a chave
        value: estoque, //para que seja exibido o valor que foi setado em 'p1'
        writable: false, //Posso alterar o valor? true ou false
        configurable: false//Pode apagar, editar, reconfigurar a chave?
    });
    // Object.defineProperty(this, 'estoque',{ //RECONFIGURAÇÃO - no caso de configurable: TRUE
    //     enumerable: true,
    //     value: estoque, 
    //     writable: true, 
    //     configurable: false
    // });
}
const p1 = new Produto ('camiseta', 20, 3);
// console.log(p1);

console.log(Object.keys(p1));

for(let chave in p1){
    console.log(chave);
}


//---------------------------------------------------------------------------------------
//definProperties
function Produto2(nome, preco, estoque) {
    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: true,
            configurable: true
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: true,
            configurable: true,
        },
    });
}
const p2 = new Produto2 ('calça', 55, 10);
// console.log(p1);

console.log(Object.keys(p2));

for(let chave in p2){
    console.log(chave);
}