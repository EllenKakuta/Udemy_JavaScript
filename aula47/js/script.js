const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;


// iniciar.addEventListener('click', function (event) {
//     relogio.classList.remove('pausado');
//     clearInterval(timer);
//     iniciaRelogio();
// });

// pausar.addEventListener('click', function (event) {
//     clearInterval(timer);
//     relogio.classList.add('pausado');
// });

// zerar.addEventListener('click', function (event) {
//     relogio.classList.remove('pausado');
//     clearInterval(timer);
//     relogio.innerHTML = '00:00:00';
//     segundos = 0;
// });

function meuTimer(){

    function criaHoraDosSegundos(segundos) {
        const data = new Date(segundos * 1000);// transformar em milésimo de segundos
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC',
        });
    }
    
    function iniciaRelogio() {
        timer = setInterval(function () {
            segundos++
            relogio.innerHTML = criaHoraDosSegundos(segundos)
        }, 1000) //somando 1 seg na variável
    }
    
    
    //MODO ALTERNATIVO
    document.addEventListener('click', function (event) {
        const elemento = event.target;//lembrando que target indica em que local da tela está sendo clicado
        if (elemento.classList.contains('iniciar')) {
            relogio.classList.remove('pausado');
            clearInterval(timer);
            iniciaRelogio();
        }
        if (elemento.classList.contains('pausar')) {
            clearInterval(timer);
            relogio.classList.add('pausado');
        }
        if (elemento.classList.contains('zerar')){
            relogio.classList.remove('pausado');
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            segundos = 0;
        }
    });
}
meuTimer();

