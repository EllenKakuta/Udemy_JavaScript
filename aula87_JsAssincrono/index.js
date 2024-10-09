//PROMISSES


function rand(min, max){
    min *= 1000;
    max *= 1000; 
    return Math.floor(Math.random() * (max - min) + min);
}

// function esperaAi(msg, tempo){
//     return new Promise((resolve, reject) =>{
//         if (typeof msg!== 'string') reject ("BAD VALUE!");
//         setTimeout(() =>{
//             resolve(msg);
//         },tempo)
//     });   
// }

// esperaAi('Conexão com BD', rand(1,3))
// .then(resposta =>{
//     console.log(resposta);
//     return esperaAi('Buscando dados da BASE', rand(1,3));
// })
// .then (resposta => {
//     console.log(resposta);
//     return esperaAi('Coletando daodos da BASE', rand(1,3));
// })
// .then(resposta =>{
//     console.log(resposta);
// })
// .then(() =>{
//     console.log ('Exibindo dados na tela');
// })
// .catch( e=>{
//     console.log('Erro', e);
// });

// console.log('Sera exibido antes de qualquer promisse');


function esperaAi(msg, tempo){
    return new Promise((resolve, reject) =>{
        if (typeof msg!== 'string') {
            reject ("BAD VALUE!");
            return;
        }
        setTimeout(() =>{
            resolve(msg.toUpperCase() + '- Passei na promise');
        },tempo)
    });   
}

//Promise.all
const promisses = [
    'Primeiro valor',
    esperaAi('Promise 1', 3000),
    esperaAi('Promise 2', 500),
    esperaAi('Promise 3', 1000),
    // esperaAi(1000,1000),
    'Outro valor'
];
Promise.all(promisses)  
    .then(function(valor){
        console.log(valor);
    })
    .catch(function(erro){
        console.log(erro)
    });


//Promise.race
Promise.race(promisses)  //Vai retornar a primeira a ser resolvida
    .then(function(valor){
        console.log(valor);
    })
    .catch(function(erro){
        console.log(erro)
    });


//Promise.resolve - Não precisa esperar, já tem os dados em mãos
// function baixaPagina(){
//     const emCache = true;
//     if(emCache){
//         return Promise.resolve('Página em cache');
//     }else{
//         return esperaAi('Baixei a página', 2000);    }
// }

// baixaPagina()
// .then(dadosPagina =>{
//     console.log(dadosPagina);
// })
// .catch(e=> console.log(e));



//Promise.reject
function baixaPagina(){
    const emCache = true;
    if(emCache){
        return Promise.reject('Página em cache');
    }else{
        return esperaAi('Baixei a página', 2000);    }
}

baixaPagina()
.then(dadosPagina =>{
    console.log(dadosPagina);
})
.catch(e=> console.log('ERRO',e));
