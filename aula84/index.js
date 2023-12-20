//MÉTODOS ESTÁTICOS

class controleRemoto{
    constructor (tv){
        this.tv = tv;
        this.volume = 0;
    }
    //MÉTODO DE INSTÂNCIA
    aumentarVolume(){
        this.volume += 2;
    }

    diminuirVolume(){
        this.volume -=2;
    }

    //MÉTODO ESTÁTICO
    static trocaPìlha(){
        console.log('Trocado')
    }
}

const controle1 = new controleRemoto('LG')
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.diminuirVolume();
controleRemoto.trocaPìlha();
console.log(controle1);