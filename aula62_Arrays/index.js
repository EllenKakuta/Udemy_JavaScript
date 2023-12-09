/*
Revisão do básico de Arrays e início do avançado

*/

//                  0        1        2
const nomes = ['Eduardo', 'Maria', 'Joana'];
const novo = [...nomes];
novo.pop();

nomes [2]= 'João';
// delete nomes[2]; // quando se quer excluir um item, mas não quer que os índices sejam alterados.
console.log(nomes);
console.log(novo); // não altera 'nomes', pois foi feita uma cópia
console.log(nomes.length); // nunca confundir os índices com o tamanho do array


// const nomes1= new Array('Maria', 'Joana', 'Eduardo') //Pode-se tbm usar o construtor
// console.log(nomes1);
