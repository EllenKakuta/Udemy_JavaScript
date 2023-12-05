/*
MANEIRAS DE DECLARAR FUNÇÕES



*/
//Declaração de função **(Function hosting)*** = declaração normal
//funciona msm se executada antes da criação
falaOi();


function falaOi(){
    console.log('oi');
}


//First-class objects (Objetos de primeira classe)
///Function expression
const souUmDado = function(){ //variável recebeu uma função e passou a ser uma função 
    console.log('Sou um dado')
};  //constante recebe função como dado

function executaFuncao(funcao){ // posso chamar a função em outra função
    funcao();
}
executaFuncao(souUmDado);


//ARROW FUNCTION
const funcaoArrow = () => {
    console.log('sou uma arrow function')
};
funcaoArrow();


//Dentro de um objeto
const obj = {
    falar() {
        console.log('falando..')
    }
};
obj.falar();