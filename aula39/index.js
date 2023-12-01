/*
DO WHILE - ESTRUTURA DE REPETIÇÃO
*/
// const nome = 'Ellen';
// let i = 0;

// while(i < nome.length){
//     console.log(nome[i]);
//     i++;
// }


function random(min, max){
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = random(min , max);
// console.log(rand);


while (rand !== 10){
    rand = random(min,max)
    console.log(rand);
}
console.log('------------------------------------------');
// WHILE - checa a condição e executa o laço
// DO WHILE - executa o código e depois checa a condição

do{
    rand = random(min, max)
    console.log(rand);
}while(rand !== 0);