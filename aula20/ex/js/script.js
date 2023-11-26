function meuEscopo(){
    const form = document.querySelector('.form'); //->selecionado pela classe através do ponto '.'
    const resultado = document.querySelector('.resultado');
    const pessoas= [];
    // let contador= 1;
    function recebeEventoForm(evento){ 
        evento.preventDefault();
        // console.log(`Form não foi enviado ${contador}`);
        // contador++;

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({ //CRIAR OBJETO E INCLUIR NO ARRAY
            nome : nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });
        console.log(pessoas);

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value} </p>`;
    }
    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();