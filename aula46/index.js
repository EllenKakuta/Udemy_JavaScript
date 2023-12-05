/*
setInterval e setTimeout

setInterval - intervalo de tempo
*/

function mostraHora(){
    let data = new Date();

    return data.toLocaleTimeString('pt-BR',{
        hour12: false
    });
}

// function funcaoDoInterval(){
//     console.log(mostraHora());
// }
// setInterval( funcaoDoInterval, 1000);//chamar a função sem executar ela (sem os '()'))


const timer = setInterval( function(){
    console.log(mostraHora());
},1000);
    
setTimeout(function(){
    clearInterval(timer);
}, 3000);
   
setTimeout(function(){
    console.log('Hello');
}, 5000);
   
