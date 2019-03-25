/* 
 *  2) Escreva um programa que receberá um vetor de valores como entrada
 *  e terá de salvar os valores repetidos em outro vetor e remover os valores repetidos 
 *  do vetor original, e como resultado exibir os valores repetidos 
 *  e o novo vetor original (sem repetição), caso não haja repetição exiba “Não possui valores repetidos”
*/

function entrada(...vet) {
    let repetidos = [];
    for (let i = 0; i < vet.length; i++) {
        for (let j = i + 1; j < vet.length; j++) {
            if (vet[i] == vet[j]) {
                repetidos.push(vet[j]);
                vet.splice(j, 1);
            }
        }
    }
    if (repetidos == []){
        return `Vetor sem repetição ${vet}\nVetor com repetição ${repetidos}`;
    } else {
        return "Nem um elemento repetido"
    }
}

console.log(entrada(1,2,3,4,5,6));