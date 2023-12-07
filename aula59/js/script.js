// function criaCalculadora(){
//     return{
//         display: document.querySelector('.display'),
       


//         inicia(){
//             this.cliqueBotoes();
//             this.clearDisplay();
//             this.pressionaEnter();
//         },
//         cliqueBotoes(){
//             //this -> calculadora
//             document.addEventListener('click', function(evento){
//                 const elemento = evento.target;
//                 if(elemento.classList.contains('btn-num')){
//                     this.btnParaDisplay(elemento.innerText);// aqui o 'this' passa a ser o document // recebendo o texto do elemento
//                 }
//                 if(elemento.classList.contains('btn-clear')){
//                     this.clearDisplay();
//                 }
//                 if(elemento.classList.contains('btn-del')){
//                     this.apagaUm();
//                 }
//                 if(elemento.classList.contains('btn-eq')){
//                     this.realizaConta();
//                 }
//                 this.display.focus();



//             }.bind(this));//alterando para que seja utilizado o 'this' da calculadora - Esse procedimento não é necessário em arrow function, pois o this sempre vai ser o do criador do objeto
//         },
//         btnParaDisplay(valor){
//             this.display.value += valor;
//         },
//         clearDisplay(){
//             this.display.value = '';
//         },
//         apagaUm(valor){
//             this.display.value = this.display.value.slice(0,-1)
//         },
//         realizaConta(){
//             let conta = this.display.value;
//             try{
//                 conta = eval(conta);
//                 if(!conta){
//                     alert('Conta inválida');
//                     return
//                 }
//                 this.display.value= conta;
//             }catch(e){
//                 alert('Conta inválida');
//                 return
//             }
//         },
//         pressionaEnter(){
//             this.display.addEventListener('keypress', e => {
//                 if(e.keyCode === 13){
//                     this.realizaConta();
//                 }
//             });
//         }

//     };
// }

// const calculadora = criaCalculadora();
// calculadora.inicia();

function Calculadora(){
    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.capturaCliques();
        this.capturaEnter();
    }

    this.capturaCliques = () =>
        document.addEventListener('click', evento => {
            const elemento = evento.target;
            if(elemento.classList.contains('btn-num')){
                this.addNumDisplay(elemento);
            }
            if(elemento.classList.contains('btn-clear')){
                this.clear();
            }
            if(elemento.classList.contains('btn-del')){
                this.del();
            }
            if(elemento.classList.contains('btn-eq')){
                this.realizaConta(elemento);
            }
            this.display.focus();
        });

   
    this.addNumDisplay = (elemento) => {
        this.display.value += elemento.innerText;
    }
    this.clear = () => {
        this.display.value = '';
    }
    this.del = () => {
        this.display.value = this.display.value.slice(0,-1)
    }

    this.realizaConta = () => {
        try{
            const conta = eval(this.display.value)
            if(!conta){
                alert('Conta inválida');
                return
            }
            this.display.value = conta;
        }catch(e){
            alert('Conta inválida');
            return
        }
    }

    this.capturaEnter = () =>{
        this.display.addEventListener('keypress', e =>{
            if(e.keyCode !== 13) return;
            this.realizaConta();
        })
    }

}
const calculadora = new Calculadora();
calculadora.inicia();
