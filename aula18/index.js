//AULA SOBRE FUNÇÕES (BÁSICO)

function saudacao(nome){
    return `Boa tarde, ${nome}`;
}
const variavel = saudacao('Ellen'); 
console.log(variavel);

function soma(x,y){
    const resultado = x+y;
    return resultado;
}
console.log(soma(2,2));
console.log(soma(22,8));

//função anônima
const raiz = function (num){
    return num ** 0.5
};
console.log(raiz(9));

//arrow function (substitui a palavra function pela seta e quando contém somente um elemento, não precisa de return nem chaves)
const raiz2 = (num) =>  num ** 0.5;
console.log(raiz2(144));
