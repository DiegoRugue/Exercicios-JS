/*
 * 4) Suponha que um caixa disponha apenas de notas de 1, 10 e 100 reais. 
 * Considerando que alguém está pagando uma compra, escreva um algoritmo 
 * que mostre o número mínimo de notas que o caixa deve fornecer como troco. 
 * Mostre também: o valor da compra, o valor do troco e a quantidade de cada 
 * tipo de nota do troco. Suponha que o sistema monetário não utilize moedas.
*/

function entrada(compra, pagamento) {
    let troco,totalTroco, n100 = 0, n10 = 0, n1 = 0;
    if (compra > pagamento) {
        return 'Não foi possivel realizar a compra';
    } else {
        troco = pagamento - compra;
        totalTroco = troco
        while (troco - 100 >= 0) {
            troco -= 100;
            n100++;
        }
        while (troco - 10 >= 0) {
            troco -= 10;
            n10++;
        }
        while (troco - 1 >= 0) {
            troco -= 1;
            n1++;
        }
        return `Valor da Compra: ${compra}, Pagamento: ${pagamento} Troco total: ${totalTroco}: ${n100} de R$100, ${n10} de R$10, ${n1} de R$1`
    }
}

console.log(entrada(10, 50));