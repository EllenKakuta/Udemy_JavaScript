/*
AULA SOBRE OPERADOR TERNÁRIO
(condição) ? 'valor para verdadeiro' : 'valor para falso';
*/
const pontuacaoUsuario = 999;

// if(pontuacaoUsuario >=1000){
//     console.log('Usuário VIP');
// }else{
//     console.log('Usuário normal');
// }
const nivelUsuario = pontuacaoUsuario >=1000 ? 'Usuário VIP' : 'Usuário Normal';
console.log(nivelUsuario);

const corUsuario = null;
const corPadrao = corUsuario || 'Preta'; //setando valor padrão para variável - caso o valor de corUsuario não fosse null, o valor que seria impresso, seria a corUsuário. Ex: pink
console.log(corPadrao);