//VALIDANDO CPF

//705.484.450-52 070.987.720-03
/*

multiplica cada um dos 9 dígitos e multiplica pela sequência regressiva
7x  0x 5x  4x  8x  4x  4x  5x 0x
10  9  8   7   6   5   4   3  2 
70  0  40  28  48  20  16  15 0 = 237 (soma dos valores)
11 - (237 % 11) = 5 (primeiro dígito) não pode ser maior que 9, se for maior considera-se como 0


7x  0x 5x  4x  8x  4x  4x  5x 0x 5x (inclusão do dígito 5 (resultado da conta anterior))
11  10 9   8   7   6   5   4  3  2  (inclusão de mais um número na sequência (11))
77  0  45  32  56  24  20  20 0  10 = 284
11 - (284 % 11) = 2 (segundo dígito)


705.484.450-52 === 705.484.450-52 (CPF original)
*/

// let cpf = '705.484.450-52';
// let cpfLimpo = cpf.replace(/\D+/g, '')//qualquer coisa que não é um número
// // console.log(cpfLimpo);
// cpfArray = Array.from(cpfLimpo);
// console.log(cpfArray.reduce((ac, val) => ac + Number(val),0));

//--------------------------------------------------------------------------------------
//RESOLUÇÃO 

function ValidaCPF(cpfEnviado){
    Object.defineProperty(this, 'cpfLimpo',{
        enumerable: true,
        get: function(){
            return cpfEnviado.replace(/\D+/g, '');
        }
    });
}

ValidaCPF.prototype.valida = function (){
    if (typeof this.cpfLimpo === 'undefined') return false;
    if (this.cpfLimpo.lenght > 11 || this.cpfLimpo.lenght < 11) return false;
    if(this.isSequencia()) return false;
   
    const cpfParcial = this.cpfLimpo.slice(0,-2);
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);

    const novoCPF = cpfParcial + digito1 + digito2


    console.log(novoCPF);
    return novoCPF === this.cpfLimpo;
}

ValidaCPF.prototype.criaDigito = function(cpfParcial){
    const cpfArray = Array.from(cpfParcial);
    let regressivo = cpfArray.length + 1;
    const total= cpfArray.reduce((acumulador, valor)=>{
        acumulador += regressivo * Number(valor);
        regressivo--;       
        return acumulador;
    }, 0)

    const digito = 11-(total % 11);
    return digito >9 ? '0' : String(digito);
    console.log(digito);
}

ValidaCPF.prototype.isSequencia = function(){
   const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.lenght)
   return sequencia === this.cpfLimpo;
}


const cpf = new ValidaCPF('705.484.450-52');
// console.log(cpf.cpfLimpo);
console.log(cpf.valida());


