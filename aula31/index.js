/*
AULA SOBRE MAIS DIFERENÇAS ENTRE VAR, LET, CONST.

let nome = 'Ellen';
var nome2 ='Ellen';

variável let não pode ser redeclarada, ou seja, não posso usar a mesma nomenclatura de let para outra variável
'-> Ex: let nome = 'Kakuta'; 

Let tem escopo de bloco {...bloco}

Var só tem escopo de função

*/

const verdadeira = true;

let nome = 'Ellen'; //criando
var nome2 ='Ellen';

if(verdadeira){
    let nome = 'Kakuta'; //criando dentro de um bloco, não redeclarando
    console.log(nome, nome2);

    if(verdadeira){
        let nome = 'Dias'; // criando dentro de outro bloco
        console.log('OK');
        console.log(nome, nome2);
        //caso não houvesse a variável declarada nesse bloco, a impressão seria da variável nome do bloco de cima, e se tbm não houvesse declaração da variável do bloco de cima, a impressão seria da variável nome global.
    }
}
console.log(nome, nome2);

let name = 'Marcelle';
var name2 = 'Marcelle';

var name2 = 'Almeida'; // variável foi redeclarada
console.log(name, name2);

if(verdadeira){
    
    var name2= 'Reis' // Redeclarada
    console.log(name, name2);

    if(verdadeira){
        var name2 = 'Dias'; // Redeclarada
        
        console.log(name, name2);
       
    }
}
console.log(name, name2); //A impressão vai ser do último valor dado a variável