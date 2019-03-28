/*
 * 11) Escreva uma função que receba dois argumentos,
 * um vetor contendo valores inteiros, e um outro argumento inteiro
 * maior que o menor número contido nesse vetor. Essa função deve imprimir
 * quais dos valores contidos no vetor devem ser somados para se obter o valor
 * do segundo argumento. Por exemplo, se a função receber o vetor
 * [11, 8, 7, 6, 5] e o segundo argumento 20, essa deveria imprimir
 * os números 8, 7, 5 uma vez que 8 + 7 + 5 = 20. Se não for possível
 * obter o valor na não imprima nada.
*/

function entrada(vetor, n){
    let menor = vetor[0];
    for (let i = 0; i < vetor.length; i++) {
        if(vetor[i] < menor) {
            menor = vetor[i];
        }
    }
    if(n > menor) {
        let result = [];
        let cont = 0;
        let total = 0;
        vetor.sort(compararNumeros);
        for (let i = 0; i < vetor.length; i++) {
            if (cont < n) {
                cont += vetor[i]
                result.push(vetor[i]);
            } else {
                for (let j = 0; j < result.length; j++) {
                    total += result[j];
                }
                console.log(total);
                if (total == n) {
                    result.toString();
                    //let print = result.replace(',', '+');
                    return `${result} = ${n}`;
                } else {
                    return 'Não foi possivel fazer a soma';
                }
            }
        }
    }
}

function compararNumeros(a, b) {
    return a - b;
}

console.log(entrada([1,2,3,4,5,6], 10));