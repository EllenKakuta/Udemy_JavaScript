//AULA SOBRE MATH

let num1 = 9.5478;
let num2 = Math.floor(num1); //-> arredondando para baixo
console.log(num2);

let num3 = Math.ceil(num1); //-> arredondando para cima
console.log(num3);

let num4 = Math.round(num1); //-> arredondando para o mais próximo
console.log(num4);

console.log(Math.max(1,2,3,5,565,66551,11651,88972)); //-> para saber o maior número
console.log(Math.min(1,2,3,5,565,66551,11651,88972)); // -> para saber o menor número
console.log(Math.random()); //-> gerar número aleatório

const aleatorio = Math.random() * (10 - 5) + 5; // aleatório entre 10 e 5
console.log(aleatorio);
console.log(num1 ** (1/2)); //-> saber a raiz quadrada
console.log(num1 ** 0.5); //-> saber a raiz quadrada