//AULA SOBRE OBJETOS (BÁSICO)

const nome01 = 'Ellen';
const sobrenome01 = 'Kakuta';
const idade01 = 30;

const nome02 = 'Marcelle';
const sobrenome02 = 'Dias';
const idade02 = 36;

//--------------------------------------------------------------------------------------------

const pessoa1 ={ //-> OBJETO
    nome: 'Ellen',
    sobrenome: 'Kakuta',
    idade: '30'
};
console.log(pessoa1.nome);

//--------------------------------------------------------------------------------------------

function criaPessoa(nome, sobrenome, idade){ //PARÂMETRO
    return {
        nome,
        sobrenome,
        idade
    };
}
const pessoa2 = criaPessoa('Ellen', 'Kakuta', 25) // ARGUMENTO> valor passado para o parâmeto
console.log(pessoa2.sobrenome);

//--------------------------------------------------------------------------------------------

const pessoa3 ={ 
    nome: 'Ellen',
    sobrenome: 'Kakuta',
    idade: '30',

    fala(){
        console.log(`${this.nome} ${this.sobrenome} esta falando oi.. A minha idade atual é ${this.idade}`);
    },
    incrementaIdade(){
        this.idade++;
    }
};
pessoa3.fala();
pessoa3.incrementaIdade();
pessoa3.fala();