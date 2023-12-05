/*
AULA SOBRE PARÂMETROS DA FUNÇÃO 
*/

function funcao(){ //parâmetro fica entre parênteses
    let total  = 0;
    for (let argumento of arguments){
        total += argumento;

    }
    console.log(total);
}
funcao(1, 2, 3, 4, 5, 6, 7);//argumento para suprir o valor do parâmetro
// Função definida pela palavra function tem uma variável especial chamada arguments, que sustenta todos os argumentos enviados
// Mesmo não tendo nenhum parâmetro informado na function, se ao declarar a função for informados argumentos, através da variável arguments, é possivel captar todos, e se for informado parcialmente pelo parâmetro, a variável capta todos, sem exceção.
//EX:

function funcao2(a, b, c){ 
    let total  = 0;
    for (let argumento of arguments){
        total += argumento;

    }
    console.log(total, a, b, c);
}
funcao2(1, 2, 3, 4, 5, 6, 7);
//Lembrando que não funciona em arrow function
//----------------------------------------------------------------------------

function funcao3(a, b, c, d, e, f){ 
    console.log(a, b, c, d, e, f);
}
funcao3(1, 2, 3);
// Se não gerar o número de argumentos, com  o número de parâmetros (se divergir), não vai gerar erro na função
//------------------------------------------------------------------------------

function funcao4(a, b = 2, c = 4){ 
    // b = b|| 0;
    console.log(a + b + c);
}
funcao4(2, undefined ,20); //undefined utilizado para que b utilize o valor padrão
//-------------------------------------------------------------------------------

function funcao5({nome, sobrenome, idade}){ 
       console.log(nome, sobrenome, idade);
}
funcao5({nome:'Ellen', sobrenome:'Kakuta', idade:38});
//-------------------------------------------------------------------------------

function funcao6({nome, sobrenome, idade}){ 
    console.log(nome, sobrenome, idade);
}
let obj = {nome:'Ellen', sobrenome:'Kakuta', idade:38};
funcao6(obj);
//---------------------------------------------------------------------------------

function funcao7([valor1, valor2, valor3]){ 
    console.log(valor1, valor2, valor3);
}
funcao7(['Ellen', 'Kakuta', 38]);
//-------------------------------------------------------------------------------

function conta(operador, acumulador, ...numeros){//rest operator sempre deve ser o último parâmetro
    for(let numero of numeros){
       if(operador ==='+') acumulador += numero;
       if(operador ==='-') acumulador -= numero;
       if(operador ==='/') acumulador /= numero;
       if(operador ==='*') acumulador *= numero;
    }
    console.log(acumulador);
}
conta('+', 1,20,30,40,50);
//-------------------------------------------------------------------------------

const conta2= function(operador, acumulador, ...numeros){
    for(let numero of numeros){
       if(operador ==='+') acumulador += numero;
       if(operador ==='-') acumulador -= numero;
       if(operador ==='/') acumulador /= numero;
       if(operador ==='*') acumulador *= numero;
    }
    console.log(acumulador);
}
conta2('+', 1,20,30,40,50);
//-------------------------------------------------------------------------------

const conta3= (operador, acumulador, ...numeros) => {
    
    console.log(operador, acumulador, numeros);
}
conta3('+', 1,20,30,40,50);
//-------------------------------------------------------------------------------

const conta4= (...args) => {
    
    console.log(args);
}
conta4('+', 1,20,30,40,50);
//mandar parâmetros indetermidados para uma função e fazer a conta de todos, utilizar rest operator 
