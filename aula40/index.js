/*
BREAK E CONTINUE DENTRO DOS LAÇOS

CONTINUE - continua para próxima iteração
BREAK - sai do laço


*/

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let numero of numeros){
//     if (numero === 2){
//         console.log('pulando numero 2')
//         continue; // executa a ação e continua o laço
//     }
//     if (numero === 7){
//         console.log('numero encontrado, saindo')
//         break; // sai do laço
//     }
//     console.log(numero);
// };
//----------------------------------------------------------------------------
// funciona com todas as formas do FOR
// for (let i= 0; i < numeros.length; i++){
//     let numero = numeros[i]
//     if (numero === 2){
//         console.log('pulando numero 2')
//         continue; // executa a ação e continua o laço
//     }
//     if (numero === 7){
//         console.log('numero encontrado, saindo')
//         break; // sai do laço
//     }
//     console.log(numero);
// };
//--------------------------------------------------------------------------------
let i = 0;

// while (i < numeros.length) {
//     let numero = numeros[i];

//     if (numero === 3) {
//         console.log('pulo');
//         i++;
//         continue;
//     }
//     console.log(numero);
//     if (numero === 7) {
//         console.log('numero encontrado, saindo');
//         i++;
//         break;
//     }
//     i++;
// }
//----------------------------------------------------------------------------
do{
    let numero = numeros[i];

    if (numero === 3) {
        console.log('pulo');
        i++;
        continue;
    }
    console.log(numero);
    if (numero === 7) {
        console.log('numero encontrado, saindo');
        i++;
        break;
    }
    i++
}
while (i < numeros.length);
