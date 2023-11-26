//AULA SOBRE NÚMEROS
// IEE 754-2008 PADRÃO JAVASCRIPT


let num1 = 1;
let num2 = 2.5;
let num3 = 100000;
let num4= 10.5886545

console.log(num1 + num2);
console.log(num1.toString() + num2); //-> haverá a concatenação e não a soma dos valores
console.log(typeof(num1));

console.log(num3.toString(2)); //--> apresentará a representação binária

console.log(num4.toFixed(2)); //--> arredonda para casas decimais, de acordo com quantidade informada nos parênteses (para aparecer depois do ponto)

console.log(Number.isInteger(num4)); //-> saber se número é inteiro
let temp = num1 * 'hello';
console.log(Number.isNaN(temp)); //-> saber se a conta não retorna um número (contas de número com strings, para que seja realizada a conversão)


// exemplo para que haja precisão usando números pequenos
let n1 =0.7;
let n2 =0.1;

n1 = ((n1 * 100) + (n2 * 100)) / 100;  // 0.8
n1 = ((n1 * 100) + (n2 * 100)) / 100;  // 0.9
n1 = ((n1 * 100) + (n2 * 100)) / 100;  // 1.0

console.log(n1);
console.log(Number.isInteger(n1));