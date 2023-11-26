/*
Luiz Otávio Miranda tem 30 anos, pesa 84kg
tem 1.8 de altura e seu IMC é 28.925252525
Luiz Otávio nasceu em 19..
*/

const nome = 'Luiz Otávio';
const sobrenome ='Miranda';
const idade = 30;
const peso = 84;
const alturaEmMetros = 1.80;
let indiceMassaCorporal;
let anoNascimento;
indiceMassaCorporal = peso /(alturaEmMetros*alturaEmMetros);
anoNascimento = 2023 - idade ;

console.log(nome + ' '+sobrenome +' tem ' + idade + ' anos, pesa '+ peso + ' kg' );
//TEMPLATE STRINGS 
console.log(`tem ${alturaEmMetros} de altura e seu IMC é ${indiceMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNascimento}`);