/*

*/

function mostraHora(){
    let data = new Date();

    return data.toLocaleTimeString('pt-BR',{
        hour12: false
    });
}

function funcaoDoInterval(){
    console.log(mostraHora());
}

setInterval(funcaoDoInterval, 1000);//chamar a função sem executar ela (sem os '()')
