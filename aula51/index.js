/*
AULA SOBRE RETORNO DA FUNÇÃO

RETURN
-retorna um valor
-termina a função

*/

function soma(a,b){
    return a + b;
}
console.log(soma(2,7));
//--------------------------------------------------------------------------------

function soma2(a,b){
    console.log(a + b);
}
soma2(5,2); //não tem retorno, apenas exibe o resultado

//--------------------------------------------------------------------------------

// document.addEventListener('click', function(){
//     document.body.style.backgroundColor = 'red';
// }); //não tem retorno, mas quando é dado o click a cor é alterada
// //--------------------------------------------------------------------------------
//O fato de uma função não ter retorno, não a define como inútil, apenas que em alguns casos, precisamos do retorno.. Depende do contexto

function criaPessoa(nome, sobrenome){
    return{
        nome: nome,
        sobrenome: sobrenome
    };
}
const p1 = criaPessoa('Ellen', 'Kakuta');
const p2 = {
    nome: 'Marcelle',
    sobrenome: 'Dias'
}
console.log(p1, p2);
console.log(typeof p1, typeof p2);

//--------------------------------------------------------------------------------

function falaFrase(comeco){
    function falaResto(resto){
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const fala = falaFrase('Olá');
const resto = fala('mundo');
console.log(resto);
//--------------------------------------------------------------------------------

function duplica(n){
    return n *2;
}
function triplica(n){
    return n *3;
}
function quadriplica(n){
    return n *4;
}
console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));
//--------------------------------------------------------------------------------

function criaMultiplicador(multiplicador){
    return function (n){
        return n*multiplicador;
    };
}
const duplica2 = criaMultiplicador(2);
const triplica2 = criaMultiplicador(3);
const quadriplica2 = criaMultiplicador(4);

console.log(duplica2(2));
console.log(triplica2(2));
console.log(quadriplica2(2));