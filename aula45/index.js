//AULA TRY CATCH FINALLY

// try{//executada quando não há erros
//     console.log('abri um arquivo')
//     console.log('manipulei e deu erro');
//     console.log('fechei o arquivo')
// }catch(e){//executado quando há erros
//     console.log('tratando o erro')
// }finally{// sempre
//     console.log('FINALLY - sempre executado');
// }

function retornaHora(data){
    if(data && !(data instanceof Date)){
        throw new TypeError ('esperando instância de Date');
    }
    if (!data){
        data = new Date();
    }
    return data.toLocaleTimeString('pt-Br',{
        
    });
}

try{
    const data = new Date('01-01-1970 12:58:12')
    const hora = retornaHora();
    console.log(hora);
}catch(e){
    // console.log('erro')
}finally{
    console.log('tenha um bom dia')
}
