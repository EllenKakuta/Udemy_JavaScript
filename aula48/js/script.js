const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');


//INPUT TAREFA
btnTarefa.addEventListener('click', function(){
    if(!inputTarefa.value) return; //só retorna valor se houver algo no input
    criaTarefa(inputTarefa.value);
})

function criaLi(){
    const li= document.createElement('li');
    return li;
}

function criaTarefa(textoInput){
    const li = criaLi();
    li.innerHTML = textoInput;
    tarefas.appendChild(li);//VAI CRIAR LI NA CLASSE TAREFAS
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefa();
}


inputTarefa.addEventListener('keypress', function(evento){ //CRIA PRESSIONANDO BOTAO ENTER
    if(evento.keyCode === 13){
        if(!inputTarefa.value) return; 
        criaTarefa(inputTarefa.value);
    }
})


function limpaInput(){
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaBotaoApagar(li){
    li.innerHTML += ' ';
    const botaoApagar = document.createElement ('button');
    botaoApagar.innerHTML = 'Apagar'
    botaoApagar.setAttribute('class', 'apagar')
    li.appendChild(botaoApagar);
}



document.addEventListener('click', function(event){
    const elemento = event.target;
    if(elemento.classList.contains('apagar')){
        elemento.parentElement.remove();
        salvarTarefa();
    }
})

function salvarTarefa(){
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for(let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace ('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);        
    }
    const tarefasJSON = JSON.stringify(listaDeTarefas)
    localStorage.setItem('tarefas', tarefasJSON);
}

function adicionaTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);
    
    for (let tarefa of listaDeTarefas){
        criaTarefa (tarefa);
    }
}
adicionaTarefasSalvas();