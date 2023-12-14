//Prototypes - base para fazer herança

 //Construtora -> molde (classe)
 function Pessoa (nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
   //  this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
 }

 //instância - gerar novos objetos  
 const pessoa1 = new Pessoa ('Luiz', 'O.'); //<- Pessoa  = função construtora
 const pessoa2 = new Pessoa ('Maria', 'A.');//<- Pessoa  = função construtora

//Pessoa.prototype === pesso1.___proto___

Pessoa.prototype.nomeCompleto = function (){
   return this.nome + ' ' + this.sobrenome;
}


 console.dir(pessoa1);
 console.dir(pessoa2);