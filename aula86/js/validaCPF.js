//705.484.450-52
//070.987.720-03

class ValidaCPF{
    constructor (cpfEnviado){
        Object.defineProperty(this, 'cpfLimpo',{
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        });        
    }

    eSequencia(){
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
    }

    geraNovoCPF(){
        const cpfSemDigito = this.cpfLimpo.slice(0, -2);
        const digito1 = ValidaCPF.geraDigito(cpfSemDigito);
        const digito2 = ValidaCPF.geraDigito(cpfSemDigito + digito1);
        this.novoCPF = cpfSemDigito + digito1 + digito2;
    }

    static geraDigito(cpfSemDigito){
        let total = 0;
        let reverso = cpfSemDigito.length + 1;

        for (let stringNumerica of cpfSemDigito){
            // console.log(stringNumerica, reverso);
            total += reverso * Number(stringNumerica);
            reverso --;
        }
        const digito  = 11-(total %11);
        return digito <=9 ? String(digito) : '0';
        console.log(total);
    }

    valida(){
        if(!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo !== 'string') return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.eSequencia()) return false;
        if(!this.geraNovoCPF()) ;
        console.log(this.novoCPF);
        return this.novoCPF === this.cpfLimpo;
    }

}


// let validaCPF = new ValidaCPF('070.987.720-03');
// // validaCPF = new ValidaCPF ('999.999.999-99')
// // console.log(validaCPF.valida());
// if(validaCPF.valida()){
//     console.log('CPF válido');
// }else{
//     console.log('CPF inválido');
// }
