//POLIMORFISMO


//Superclass
function Conta(agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor){
    if(this.saldo < valor){
        console.log(`Saldo insuficiente, você possui R$ ${this.saldo}`);
        return;
    } 
    this.saldo -= valor;
    this.verSaldo();
};

Conta.prototype.depositar = function(valor){
    this.saldo += valor;
    this.verSaldo();
};

Conta.prototype.verSaldo = function(){
    console.log(`Ag/C: ${this.agencia}/${this.conta} Saldo: R$ ${this.saldo.toFixed(2)}`);

};

function ContaCorrente(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;

}
ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;
ContaCorrente.prototype.sacar = function(valor){
    if(valor > (this.saldo)+this.limite){
        console.log(`Saldo insuficiente, você possui R$ ${this.saldo} `);
        return;
    } 
    this.saldo -= valor;
    this.verSaldo();
};
const contaCorrente = new ContaCorrente (25,58,0,100);
contaCorrente.depositar(12);
contaCorrente.sacar(100);

console.log();
function ContaPoupanca(agencia, conta, saldo){
    Conta.call(this, agencia, conta, saldo);
}
ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

const contaPoupanca = new ContaPoupanca(12,33,0);
contaPoupanca.depositar(12);
contaPoupanca.sacar(100);






// console.log(contaCorrente);

// const conta1 = new Conta(851, 2254, 25);
// conta1.depositar(50);
// conta1.depositar(82);
// conta1.sacar(50);
// console.log(conta1);