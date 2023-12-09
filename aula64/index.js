/*
CONCATENAR ARRAYS
*/

const a1 = [1,2,3];
const a2 = [4,5,6];
// const a3 = a1.concat(a2);
// const a3 = a1.concat(a2, [7,8,9], 'Ellen');
//... rest -> ...spread
// const a3 =[...a1,...a2];
const a3 =[...a1, 'Ellen',...a2, ...[7,8,9]];// é necessário incluir o spread para inserir novos arrays
console.log(a3);