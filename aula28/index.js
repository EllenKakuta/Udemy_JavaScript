/*
AULA SOBRE OBJETO DATE
*/
// const tresHoras = 60 * 60 * 3 * 1000;//(segundos, minutos, horas, milésimos de segundos)
// const umDia = 60 * 60 * 24 * 1000;
// const data = new Date(0 + tresHoras + umDia); //01/01/1970 Timestamp unix ou época unix
//const data = new Date(2019,3); //a, m, d, h, M, s, ms
//const data = new Date('2019-04-20 20:20:59');

// const data = new Date();//FUNÇÃO CONSTRUTORA
// console.log('Dia', data.getDate());
// console.log('Mês', data.getMonth());
// console.log('Ano', data.getFullYear());
// console.log('Hora', data.getHours());
// console.log('Min', data.getMinutes());
// console.log('Seg', data.getSeconds());
// console.log('ms', data.getMilliseconds());
// console.log('Dia semana', data.getDay()); // 0-Domingo, 6-Sábado


// console.log(data.toString());
// console.log(Date.now());

function zeroAEsquerda(num){
    return num >=10 ? num : `0${num}`;
}


function formaData(data){
    // console.log(data);
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1); //mês não começar no 0, começar no 1
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());
    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}
const data = new Date();
const dataBrasil = formaData(data);
console.log(dataBrasil);
formaData(data);