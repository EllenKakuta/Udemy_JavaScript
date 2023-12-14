function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    
    let estoquePrivado = estoque
    Object.defineProperty(this, 'estoque', {
            enumerable: true,
            configurable: true,
            get: function (){ //função do get: somente exibir o valor
                return estoquePrivado;
            },
            set: function (valor){
                if(typeof valor !== 'number'){
                    console.log('valor inválido')
                    return
                }
                estoquePrivado = valor;
            }
        });
}
function criaProduto(nome){
    return{
        get nome(){
            return nome;
        },
        set nome(valor){
            valor = valor.replace('coisa', ' ');
            nome = valor;
        }
    };
}

// const p1= new Produto ('calça', 55, 10);
// p1.estoque = 'sdlkfslkdfj';
// console.log(p1);
// console.log(p1.estoque);

const p2 = criaProduto('Camiseta');
p2.nome = 'qualquer coisa';
console.log(p2.nome);

