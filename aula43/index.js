//EXERCÍCIO DE LÓGICA DE PROGRAMAÇÃO 03
/*
Escreva uma função que recebe um número e retorne o seguinte:
- Número é divisível por 3 = Fizz
- Número é divisível por 5 = Buzz
- Número é divisível por 3 e 5 = FizzBuzz
- Número NÃO é divisível por 3 e 5 = Retorna o próprio número
Checar se número é realmente número = Retorna o próprio número
Usar a função com números de 0 a 100
*/

function FizzBuzz(numero) {
    if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz'
    if (numero % 3 === 0) return 'Fizz'
    if (numero % 5 === 0) return 'Buzz'
    if (typeof numero !== 'number') return numero;
    return numero;
}

for (let i = 0; i <= 100; i++) {
console.log(i, FizzBuzz(i));
}


