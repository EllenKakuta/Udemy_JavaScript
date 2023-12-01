
//MEU CÓDIGO


// function getDiaSemanaTexto(diaSemana) {
//     let diaSemanaTexto;
//     switch (diaSemana) {
//         case 0:
//             diaSemanaTexto = 'Domingo';
//             return diaSemanaTexto;
//         case 1:
//             diaSemanaTexto = 'Segunda-feira';
//             return diaSemanaTexto;
//         case 2:
//             diaSemanaTexto = 'Terça-feira';
//             return diaSemanaTexto;
//         case 3:
//             diaSemanaTexto = 'Quarta-feira';
//             return diaSemanaTexto;
//         case 4:
//             diaSemanaTexto = 'Quinta-feira';
//             return diaSemanaTexto;
//         case 5:
//             diaSemanaTexto = 'Sexta-feira';
//             return diaSemanaTexto;
//         case 6:
//             diaSemanaTexto = 'Sábado';
//             return diaSemanaTexto;
//         default:
//             diaSemanaTexto = 'Dia desconhecido';
//             return diaSemanaTexto;
//     }
// }
// const data = new Date();
// let diaSemana = data.getDay();
// let diaSemanaTexto = getDiaSemanaTexto(diaSemana);
// console.log(data);
// console.log(diaSemana, diaSemanaTexto);


// function getMes(mes) {
//     let mesTexto;
//     switch (mes) {

//         case 1:
//             mesTexto = 'Janeiro';
//             return mesTexto;
//         case 2:
//             mesTexto = 'Fevereiro';
//             return mesTexto;
//         case 3:
//             mesTexto = 'Março';
//             return mesTexto;
//         case 4:
//             mesTexto = 'Abril';
//             return mesTexto;
//         case 5:
//             mesTexto = 'Maio';
//             return mesTexto;
//         case 6:
//             mesTexto = 'Junho';
//             return mesTexto;
//         case 7:
//             mesTexto = 'Julho';
//             return mesTexto;
//         case 8:
//             mesTexto = 'Agosto';
//             return mesTexto;
//         case 9:
//             mesTexto = 'Setembro';
//             return mesTexto;
//         case 10:
//             mesTexto = 'Outubro';
//             return mesTexto;
//         case 11:
//             mesTexto = 'Novembro';
//             return mesTexto;
//         case 12:
//             mesTexto = 'Dezembro';
//             return mesTexto;
//     }
// }
// let mes = data.getMonth() +1;
// let mesTextoTexto = getMes(mes);
// console.log(mes, mesTextoTexto);

// const dataAtual = document.querySelector('.data')
// dataAtual.innerHTML= `${diaSemanaTexto}, ${data.getDate()} de ${mesTextoTexto} de ${data.getFullYear()} - ${data.getHours()}:${data.getMinutes()}h`



//-------------------------------------------------------------------------------
//CÓDIGO DA AULA - 01
// const h1 = document.querySelector('.data');
// const data = new Date();


// function getDiaSemanaTexto(diaSemana) {
//     let diaSemanaTexto;
//     switch (diaSemana) {
//         case 0:
//             diaSemanaTexto = 'Domingo';
//             return diaSemanaTexto;
//         case 1:
//             diaSemanaTexto = 'Segunda-feira';
//             return diaSemanaTexto;
//         case 2:
//             diaSemanaTexto = 'Terça-feira';
//             return diaSemanaTexto;
//         case 3:
//             diaSemanaTexto = 'Quarta-feira';
//             return diaSemanaTexto;
//         case 4:
//             diaSemanaTexto = 'Quinta-feira';
//             return diaSemanaTexto;
//         case 5:
//             diaSemanaTexto = 'Sexta-feira';
//             return diaSemanaTexto;
//         case 6:
//             diaSemanaTexto = 'Sábado';
//             return diaSemanaTexto;
//         default:
//             diaSemanaTexto = 'Dia desconhecido';
//             return diaSemanaTexto;
//     }
// }

// function getNomeMes(numeroMes) {
//     let nomeMes;
//     switch (numeroMes) {

//         case 1:
//             nomeMes = 'Janeiro';
//             return nomeMes;
//         case 2:
//             nomeMes = 'Fevereiro';
//             return nomeMes;
//         case 3:
//             nomeMes = 'Março';
//             return nomeMes;
//         case 4:
//             nomeMes = 'Abril';
//             return nomeMes;
//         case 5:
//             nomeMes = 'Maio';
//             return nomeMes;
//         case 6:
//             nomeMes = 'Junho';
//             return nomeMes;
//         case 7:
//             nomeMes = 'Julho';
//             return nomeMes;
//         case 8:
//             nomeMes = 'Agosto';
//             return nomeMes;
//         case 9:
//             nomeMes = 'Setembro';
//             return nomeMes;
//         case 10:
//             nomeMes = 'Outubro';
//             return nomeMes;
//         case 11:
//             nomeMes = 'Novembro';
//             return nomeMes;
//         case 12:
//             nomeMes = 'Dezembro';
//             return nomeMes;
//     }
// }

// function zeroAEsquerda(num) {
//     return num >= 10 ? num : `0${num}`;
// }

// function criaData() {
//     const diaSemana = data.getDay();
//     const numeroMes = data.getMonth();
//     const nomeDia = getDiaSemanaTexto(diaSemana);
//     const nomeMes = getNomeMes(numeroMes);
//     return ` ${nomeDia}, ${data.getDate()} de ${nomeMes} de ${data.getFullYear()} - ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}h`
// }
// h1.innerHTML = criaData(data);

//--------------------------------------------------------------------------------
//CÓDIGO DA AULA - 02
// const h1 = document.querySelector('.data');
// const data = new Date(); 
// h1.innerHTML = data.toLocaleString('pt-BR', {dateStyle:'full', timeStyle:'short'});

//--------------------------------------------------------------------------------
//CÓDIGO AULA - 03

const h1 = document.querySelector('.data');
const data = new Date();


function getDiaSemanaTexto(diaSemana) {
   const dias = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira','Sexta-feira','Sábado'];
   return dias[diaSemana];
}

function getNomeMes(numeroMes) {
   const meses =['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    return meses[numeroMes];
}

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function criaData() {
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();
    const nomeDia = getDiaSemanaTexto(diaSemana);
    const nomeMes = getNomeMes(numeroMes);
    return ` ${nomeDia}, ${data.getDate()} de ${nomeMes} de ${data.getFullYear()} - ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}h`
}
h1.innerHTML = criaData(data);

