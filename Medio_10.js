/*
 * 10) Torre de Hanói: considerando 3 torres, o objetivo é transferir 3 discos
 * que estão na torre A para a torre C, usando uma torre B como auxiliar. 
 * Somente o último disco de cima de uma pilha pode ser deslocado para outra,
 * e um disco maior nunca pode ser colocado sobre um menor. 
 * Implementar uma função recursiva que mostra a sequência de movimentos
 * para resolver o problema da Torre de Hanói.
*/

function imprime(a,b) {
    console.log(`${a} para ${b}`);
}

function torreHanoi(n, a, b, c,) {
    if (n > 0) {
        torreHanoi(n - 1, a, c, b);
        imprime(a, c);
        torreHanoi(n - 1, b, a, c);
    }
}

console.log(torreHanoi(3, 'a', 'b', 'c'));