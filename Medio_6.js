/*
 *  6) Escreva um algoritmo que leia um número N (número de termos de uma progressão aritmética),
 *  a1 (o primeiro termo da progressão) e R (a razão da progressão) e escreva os N termos desta progressão,
 *  bem como a soma dos elementos.
*/

function pa(n, a1, r){
    let an = []
    for (let i = 0; i <= n; i++) {
        an[i] = a1 + (i - 1) * r
    }
    return an;
}
console.log(pa(13, 5, 11));