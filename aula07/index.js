// aula sobre constante - NUNCA MUDARÁ O VALOR

/*
R E G R A S : 

-> não podemos declarar varíaveis com palavras reservadas 
'---> Ex: let let; let console; let if
-> precisam ter nome significativos - não colocar só uma letra no nome da variável (evita código confuso)
-> não começar o nome da variável com número
-> começar com letra minúscula
-> não podem conter espaços ou traços
-> utilizamos camelCase (inicia com letra minúscula e próxima palavra com letra maiúscula)
-> Case-sensitive - letras maiúsculas e minúsculas fazem diferença 
'---> Ex: nomeCliente; nomecliente
-> Não pode modificar o valor de uma constante - declarar e atribuir um novo valor'
'---> Ex: const nome= 'João';
         nome = 'Maria';

-> NÃO UTILIZAR VAR, UTILIZAR CONST

-> não posso declarar uma constante sem inicializar ela, pois ela não pode ser alterada
EX: const nome;
nome = 'João';
*/

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
console.log(resultado);
const resultadoDuplicado = resultado * 2;
console.log(resultadoDuplicado);
let resultadoTriplicado = resultado*3;
console.log(resultadoTriplicado);
resultadoTriplicado = resultadoTriplicado + 5;  // aqui foi possível alterar o valor do resultadoTriplicado devido ter sido declarado como let.
console.log(resultadoTriplicado);

console.log(typeof primeiroNumero);
const terceiroNumero = '9'
console.log(typeof terceiroNumero);