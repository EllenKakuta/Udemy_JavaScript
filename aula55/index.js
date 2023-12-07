/*
FUNÇÕES IMEDIATAS - FUNÇÕES AUTO INVOCADAS 
IIFE - IMMEDIATELY INVOKED FUNCTION EXPRESSION
*/

//função normal
function qualquerCoisa(){
    console.log('sdksldfjhsldijf');
}
qualquerCoisa(); //Função toca o escopo global


//--------------------------------------------------------------------------------
//função anônima, precisa estar entre parênteses
(function(){
    const nome = "ellen"
    console.log(nome);
    //codigo pode ser escrito aqui dentro normalmente
    //protege do escopo global
})();
//--------------------------------------------------------------------------------

(function(){
    const sobrenome = "Kakuta"
    function criaNome(nome){
        return nome + ' ' + sobrenome;
    }
    function falaNome(){
        console.log(criaNome('Ellen'));
    }
    falaNome();
})();