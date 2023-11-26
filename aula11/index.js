/*
Aula sobre operadores aritiméticos, de atribuição e incremento 

+ Adição/concatenação
** Potenciação
% Resto da divisão


PRECEDÊNCIA
() o que estiver dentro dos parênteses
** potenciação
* multiplicação
/ % divisão e módulo da divisão
+ - contas de adição e subtração
se tiverem a msm precedência, é realizado da esquerda para direita


NaN - Not a Number - converter string para número
parseInt(inteiro)
parseFloat(decimais)
Number()


*/

const num1 = 10;
const num2 =5;
console.log(num1 % num2)



let contador =1;
contador ++;
console.log(contador);

let contador2= 2
console.log(contador++); // com o pós-incremento, ele imprime e não adiciona
console.log(++contador); // com o pré-incremento, ele adiciona primeiro e depois imprime
console.log(--contador);