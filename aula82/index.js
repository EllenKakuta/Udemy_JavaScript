//GETTERS E SETTERS

const _velocidade = Symbol('velocidade');
class Carro{
    constructor(nome){
        this.nome = nome;
        this[_velocidade] = 0;
    }

    acelerar(){
        if(this[_velocidade] >=100) return;
        this[_velocidade] ++;
    }

    desacelerar(){
        if(this[_velocidade] <=0) return;
        this[_velocidade] --;
    }

    set velocidade(valor){
        if(typeof valor != 'number') return;
        if(valor >=100 || valor <=0) return;
        this[_velocidade] = valor;
    }

    get velocidade(){
        return this[_velocidade];
    }// dessa forma não é possível alterar velocidade acidentalmente
}


const c1 = new Carro('Fusca');
for (let i=0; i<=200; i++){
    c1.acelerar();
}

c1.velocidade = 2000;
console.log(c1);