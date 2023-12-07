/*
FUNÇÕES FÁBRICA - FACTORY FUNCTION

Funções que retornam objetos
*/

function criaPessoa(nome, sobrenome, altura, peso){
    return{
        nome,
        sobrenome,
        //Getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },
        //Setter
        set nomeCompleto(valor){         
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            console.log(valor);
        },


        fala(assunto){
            return `${this.nome} está ${assunto}`
        },
        altura, 
        peso,
        //Getter
        get imc(){ //fingindo que é um atributo 
            const indice = this.peso/this.altura **2;
            return indice.toFixed(2);
        }
    };
}
const p1 = criaPessoa('Ellen', 'Kakuta', 1.7, 90);
console.log(p1.imc);
p1.imc = 29; // não irá mudar o valor, pq está apenas recebendo (Getter) e não enviando (Setter)
p1.nomeCompleto = 'Marcelle Reis Dias';
console.log(p1.nomeCompleto);

const p2 = criaPessoa('Marcelle', 'Dias', 1.8, 96);
// console.log(p1.fala('falando sobre JS'));
// console.log(p2.fala('falando sobre JS'));

//this sempre vai se referir a pessoa que se está executando, que no caso é p1, é o mesmo que -> console.log(p1.nome);


