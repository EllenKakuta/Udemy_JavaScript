/*
CLOSURE (encerramento)

*/

function retornaFuncao(){
    const nome= 'Ellen';
    return function (){
        return nome;
    }
}
const funcao = retornaFuncao();
// console.log(funcao);
console.dir(funcao);

// CLOSURE - habilidada da função em acessar o escopo léxico / lembra dela e dos vizinhos
// Fechar um escopo quando executa a função 

//--------------------------------------------------------------------------------

function retornaFuncao2(nome){
    return function (){
        return nome;
    }
}
const funcao2 = retornaFuncao2('Ellen');
// console.log(funcao);
console.dir(funcao2());