/*
AULA SOBRE ESTRUTURAS CONDICIONAIS

IF pode ser usado sozinho
ELSE IF não pode ser usado sozinho
Sempre que utilizo a palavra else preciso de um if antes
Posso ter vários else ifs na condição
Só posso ter um ELSE
Podemos usar condição sem else if, utilizando apenas if e else, ou somente o if
*/


/*Entre 0 - 11 - Bom dia
Entre 12 e 17 - Boa tarde
Entre 18 e 23 - Boa noite*/

const hora = 19;

if(hora >= 0 && hora <= 11){
    console.log('Bom dia!');
} else if (hora >=12 && hora <=17){
    console.log('Boa tarde!');
}else if (hora >= 18 && hora <= 23){
    console.log('Boa noite!');
} else {
    console.log ('Olá!!');
}