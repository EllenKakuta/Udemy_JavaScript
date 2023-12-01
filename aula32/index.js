/*
AULA SOBRE ATRIBUIÇÃO VIA DESESTRUTURAÇÃO (ARRAYS)

let a = 'A';
let b = 'B';
let c = 'C';

const letras = [b,c,a];
[a, b, c] = letras;

console.log(a,b,c);


*/ 
// índice        0     1     2    3    4    5    6   7   8     
const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900];
const primeiroNumero = numeros[0];
console.log(primeiroNumero);

// const [primeiroNum, segundoNum, ... resto] = numeros;
const [um, ,tres, ,cinco, , sete] = numeros;
console.log(um, tres, cinco, sete);
// console.log(resto);


//               0          1          2  
//            0  1  2    0  1  2    0  1  2 
const num = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(num[1][2]);
const [, [,,seis]] = num;
console.log(seis);