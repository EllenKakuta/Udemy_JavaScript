const numero = Number(prompt('Digite um número'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML= numero;
texto.innerHTML = '';
texto.innerHTML += `<p>Raiz quadrada: <strong>${numero ** 0.5}</p>`
texto.innerHTML += `<p> ${numero} é inteiro? <strong>${Number.isInteger(numero)}</p>`
texto.innerHTML += `<p>É NaN? <strong> ${Number.isNaN(numero)}</p>`
texto.innerHTML += `<p>Arredondado para cima: <strong>${Math.floor(numero)}</p>`
texto.innerHTML += `<p>Arredondado para baixo: <strong>${Math.ceil(numero)}</p>`
texto.innerHTML += `<p>Com duas casas decimais: <strong>${numero.toFixed(2)}</p>`
