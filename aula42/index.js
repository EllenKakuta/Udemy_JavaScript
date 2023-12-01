//EXERCÍCIO DE LÓGICA DE PROGRAMAÇÃO 02
//Escreva uma função chamada ePaisagem que recebe 2 argumentos : largura e altura de uma imagem (number).
//Retorne true se a imagem estiver no modo paisagem.

// function ePaisagem (largura, altura){
//     if (largura > altura){
//         return true
//     }return false;
// }

// function ePaisagem (largura, altura){
//     return largura > altura ? true : false
// } 

// function ePaisagem (largura, altura){
//     return largura > altura
// } 
// console.log(ePaisagem(1920,1080));

//SEMPRE BUSCAR USAR ARROW FUNCTION
const ePaisagem = (largura, altura) => largura > altura ? true : false;
console.log(ePaisagem(1920,1080));