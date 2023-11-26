//Aula sobre alert, confirm e prompt no navegador
/*
função confirm sempre retorna um boleano

const confirma = confirm('Realmente deseja apagar?');
variável é salva de acordo com resposta do usuário, ou verdadeiro ou falso


let num1 = prompt('Digite um número');
consultando através do console.log(num1), ou atráves do navegador(inspecionar) digitando num1, irá retornar o número digitado
valor serpa salvo na variável
para que não haja falha na concatenação de número (sistema usá-lo como string), deve-se convertê-lo
EX: num1= parseFloat(num1); num1= Number(num1);


*/ 

//EXERCÍCIO
let num1 = prompt ('Digite um número');
let num2 = prompt ('Digite outro número');
num1= Number(num1);
num2= Number(num2);
let resultado = num1+num2
resultado = Number(resultado)
alert(`A soma entre os dois números é ${resultado}`)
