/* aula sobre váriáveis, que seria um tipo de criar referências na memória

R E G R A S : 
-> não podemos criar variáveis com o mesmo nome
-> não podemos redeclarar váriaveis com let
-> não podemos declarar varíaveis com palavras reservadas 
'---> Ex: let let; let console; let if
-> precisam ter nome significativos - não colocar só uma letra no nome da variável (evita código confuso)
-> não começar o nome da variável com número
-> começar com letra minúscula
-> não podem conter espaços ou traços
-> utilizamos camelCase (inicia com letra minúscula e próxima palavra com letra maiúscula)
-> Case-sensitive - letras maiúsculas e minúsculas fazem diferença 
'---> Ex: nomeCliente; nomecliente
-> NÃO UTILIZAR VAR, UTILIZAR LET
*/

let variavel; // variável declarada, se o código for rodado, aparecerá como undefined
variavel= 'qualquer valor'; // inicializando a variável, deixa de ser undifined


let nome = 'João';


console.log(nome,'nasceu em 1984.');
console.log('Em 2000', nome,'conheceu Maria.');
console.log(nome,'casou-se com Maria em 2012.')
console.log('Maria teve 1 filho com', nome,'em 2015.')
console.log('O filho de', nome, 'se chama Eduardo.')

console.log(variavel);

