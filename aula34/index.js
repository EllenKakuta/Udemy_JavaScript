/*
AULA SOBRE ESTRUTURA DE REPETIÇÃO
FOR CLÁSSICO
*/

for (let i = 0; i <= 5; i++) {
    console.log(`Linha ${i}`);
}

for (let i = 0; i <= 50; i += 5) {
    console.log(`Linha ${i}`);
}

for (let i = 1000; i >= 100; i -= 100) {
    console.log(`Linha ${i}`);
}

for (let i = 0; i <= 10; i++) {
    const par = i % 2 === 0 ? 'par' : 'ímpar' ;
    console.log(i,par);
}

const frutas =['maçã', 'pêra', 'uva','melancia', 'laranja', 'manga'];
console.log(frutas.length);
for(i = 0; i < frutas.length; i++){
    console.log(`Índice ${i}`,frutas[i]);
}