/*
FUNÇÃO SPLICE  
*/

//                -6      -5       -4       -3         -2        -1
//                0        1        2        3          4         5
const nomes = ['Maria', 'João', 'Pedro', 'Eduardo', 'Gabriel', 'Júlia'];

//nomes.splice(indice, delete, elem1, elem2, elem3);

//remover o último item do array
// const removidos = nomes.splice(4, 1);
// const removidos = nomes.splice(-4, 2);
const removidos = nomes.splice(4, 0, 'Carmem'); //Irá adicionar no índice 4
console.log(nomes, removidos);

//simulando o pop
//const removidos = nomes.splice(-1,1);


//simulando o shift
//const removidos = nomes.splice(0,1);

//simulando o push
//const removidos = nomes.splice(nomes.lengh, 0, 'Luiz');

//simulando o unshift
//const removidos = nomes.splice(0, 0, 'Luiz');