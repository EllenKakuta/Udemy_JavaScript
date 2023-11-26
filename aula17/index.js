//AULA SOBRE ARRAYS (BÁSICO)

//            01234
const nome = 'Ellen';
console.log(nome[0]) //-> irá apresentar a letra solicitada

// arrays são indexados pelo elemento
//               0           1          2
const alunos = ['Ellen', 'Michelle', 'Lucas'];
console.log(alunos);
console.log(alunos[0]); //-> irá apresentar o elemento solicitado
//--------------------------------------------------------------
//EDIÇÃO
alunos[0] = 'Marcelle';
console.log(alunos);
//-------------------------------------------------------
//ADIÇÃO DE ELEMENTOS
console.log(alunos.length);
alunos[3]='Cristiane'; //-> número de elemento que não existe, é adicionado ao final, porém é necessário saber o tamanho, o que torna pouco prático
console.log(alunos);

alunos.push('Eslei');//função para que seja adicionado com mais praticidade
console.log(alunos);

alunos.unshift('Erson');//para adicionar no começo
console.log(alunos);
//--------------------------------------------------------
//REMOÇÃO
alunos.pop(); //> remove o último elemento
console.log(alunos);

alunos.shift() //-> remove o primeiro elemento.
console.log(alunos);

// delete alunos[3]; //-> não remove o índice, apenas o elemento
// console.log(alunos)
//----------------------------------------------------

console.log(alunos.slice(0,2)); //-> 'fatiar'
console.log(alunos.slice(0,-3));
console.log(alunos instanceof Array); //-> Para saber se é um array