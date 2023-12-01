// let peso = document.getElementById('peso');
// let altura = document.getElementById('altura')
// const texto = document.getElementById('texto')

// // peso = Number(peso);
// // altura=Number(altura)

// function calculaIMC(){
//     let imc = peso/(altura*altura);
//     // imc = Number(imc);
//     console.log(imc);
//     if(peso>0 && peso <=18.5){
//         texto.innerHTML += `<p>Seu IMC é ${imc}, você está abaixo do peso</p>`
//         console.log(`Seu IMC é ${imc}, você está abaixo do peso`)
//     }else if( imc >18.5 && imc <=24,9){
//         texto.innerHTML += `<p>Seu IMC é ${imc}, seu peso está normal</p>`
//     }else if(imc >=25 && imc <= 29.9){
//         texto.innerHTML+= `<p>Seu IMC é ${imc}, você está com sobrepeso</p>`
//     }else if (imc >=30 && imc <= 34.9){
//         texto.innerHTML+= `<p>Seu IMC é ${imc}, você possui obesidade grau 1</p>`
//     }else if(imc >=35 && imc <= 39.9){
//         texto.innerHTML+= `<p>Seu IMC é ${imc}, você possui obesidade grau 2</p>`
//     }else if(imc > 40){
//         texto.innerHTML+= `<p>Seu IMC é ${imc}, você possui obesidade grau 3 </p>`
//     }
// };
// calculaIMC();


//CAPTURAR EVENTO DE SUBMIT DO FORMULÁRIO ** NÃO ESQUECER

const form = document.querySelector('#formulario');
form.addEventListener('submit', function (evento){ //Evento que desejo ouvir, dar atenção
    evento.preventDefault(); //Cancela o evento padrão, ou seja, quando clicado o botão calcular, não será submetido a nenhuma ação padrão
    const inputPeso = evento.target.querySelector('#peso')//informar qual elemento ta recebendo o evento. EX: se for um click do mouse, vai informar qual elemento recebeu o click
    const inputAltura = evento.target.querySelector('#altura')
    const peso = Number(inputPeso.value);// valor do input transformado em número
    const altura = Number (inputAltura.value);
    if(!peso){ // se peso for falso, diferente de número 
        setResultado('Peso inválido', false);//false para que seja alterada a cor
        return;//Para função parar
    }
    if(!altura){ 
        setResultado('Altura inválida', false);
        return;
    }  
    const imc = getImc(peso,altura)
    const nivelImc = getNivelImc(imc);
    const msg = `Seu IMC é ${imc} (${nivelImc}).`;
    setResultado(msg, true);//informando que valor é válido
});


function criaParagrafo (){ // criar o parágrafo e retornar p
    const p = document.createElement('p');//criando parágrafo
    return p 
}

function setResultado(msg, isValid){
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = ''; 
    const p = criaParagrafo();//elemento criado pela função
    resultado.appendChild(p); //acrescenta o filho (parágrafo)
    p.innerHTML= msg;

    if(isValid) {
        p.classList.add('paragrafo-resultado');
    }else{
        p.classList.add('bad');
    }
   
}

function getImc(peso,altura){
    const imc = peso/(altura*altura); // ou peso/altura **2;
    return imc.toFixed(2); //valor com 2 casas decimais
}

function getNivelImc(imc){
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
    if(imc >= 39.9) return nivel[5];   
    if(imc >= 34.9) return nivel[4];
    if(imc >= 29.9) return nivel[3];
    if(imc >= 24.9) return nivel[2];
    if(imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
}