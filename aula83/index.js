//HERANÇA   


class DispositivoEletronico {
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if(this.ligado) {
            console.log(this.nome + ' já ligado')
            return;
        }
        this.ligado = true;    
    }

    desligar(){
        if(!this.ligado){
            console.log(this.nome + ' já desligado')
        }
        this.ligado = false;
    }
}

// const d1 = new DispositivoEletronico('Smartphone');
// d1.ligar();
// d1.ligar();
// console.log(d1);

class Smartphone extends DispositivoEletronico{
    constructor(nome, cor, modelo){
        super(nome); //chama a classe pai
        this.cor = cor;
        this.modelo = modelo;

    }
}

class Tablet extends DispositivoEletronico{
    constructor (nome, temWifi){
        super(nome);
        this.temWifi = temWifi;
    }
    ligar(){
        console.log('método ligar alterado')
    }
    falaOi(){
        console.log('OI')
    }
}

const s1 = new Smartphone('Samsung', 'preto', 'galaxy s10');
console.log(s1);

const t1 = new Tablet ('iPad', true);
console.log(t1);
t1.ligar();
t1.falaOi();