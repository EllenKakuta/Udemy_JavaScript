//ESTRUTURA DE DADOS MAP
const pessoas = [
    {id: 3, nome:'Ellen'},
    {id: 2, nome:'João'},
    {id: 1, nome:'Maria'},
];

//ORDEM É ALTERADA
// const novasPessoas = {};
// for (const pessoa of pessoas){
//     const {id} = pessoa;
//     novasPessoas[id] = {...pessoa};
// }
// console.log(novasPessoas);


//ORDEM NÃO É ALTERADA
const novasPessoas = new Map();
for (const pessoa of pessoas){
    const {id} = pessoa;
    novasPessoas.set(id, {...pessoa});
}
// for(const pessoas of novasPessoas.values()){
//     console.log(pessoas);
// }

// for (const pessoa of novasPessoas){
//     console.log(pessoa);
// }


novasPessoas.delete(2);
console.log(novasPessoas);