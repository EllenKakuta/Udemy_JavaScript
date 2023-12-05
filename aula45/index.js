//AULA TRY CATCH FINALLY

// try{//executada quando não há erros
//     console.log('abri um arquivo')
//     console.log('manipulei e deu erro');
//     console.log('fechei o arquivo')
// }catch(e){//executado quando há erros
//     console.log('tratando o erro')
// }finally{// sempre - pode ser omitido
//     console.log('FINALLY - sempre executado');
// }

function retornaHora(data){
    if(data && !(data instanceof Date)){ //se a data for enviada e não for instancia de Date (instancia de Date sempre new Date())
        throw new TypeError ('esperando instância de Date');
    }
    if (!data){ // se a data não for enviada, vai gerar uma nova data
        data = new Date();
    }
    return data.toLocaleTimeString('pt-Br',{
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false // para que seja apresentada horário de 24h
    });
}

try{
    const data = new Date('01-01-1970 12:58:12')
    const hora = retornaHora();
    console.log(hora);
}catch(e){
    console.log('erro')
}finally{
    console.log('tenha um bom dia')
}
