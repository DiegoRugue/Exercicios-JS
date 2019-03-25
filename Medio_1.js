/* 
 *	1) Escreva um programa para calcular o Máximo Divisor Comum (MDC)
 *  e o Mínimo Múltiplo Comum entre dois números, a entrada é feita por 2 números inteiros. 
*/
function mdc(n1, n2) {

    if (n2 == 0){
        return n1;
    } else {
        return mdc(n2, n1 % n2);
    }
}

console.log(mmc(12, 18));


function mmc(n1, n2) {
    return n1 * (n2 / mdc(n1, n2));
}