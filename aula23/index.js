/*
AVALIAÇÃO DE CURTO CIRCUITO

&& -> false && true -> "o valor mesmo"
|| -> true && false -> vai retorar o valor verdadeiro -> precisa só de um valor verdadeiro e retornará o valor verdadeiro

FALSY
- false
| 0
| '' "" ``
| null/undefined
- NaN
'---> Qualquer coisa diferente disso é true

*/

console.log('Ellen' && 0 && 'Kakuta'); 
console.log(0 || false || null || 'Ellen' || true); //-> vai retornar o valor verdadeiro
