/*
 * 9) Seja N um número quadrado perfeito. Se somarmos os números ímpares consecutivos 
 * (1 + 3 + 5 +7 + 9 + ...) até que esta soma seja igual a N, o número M de termos somados
 * será igual a raiz quadrada de N. Exemplo: N = 1616 = 1 + 3 + 5 + 7, M = 4 termos. 
 * Logo, a raiz quadrada de 16 é 4. Fazer um programa para ler um número inteiro e 
 * positivo N e responder se N é quadrado perfeito.
*/

function quadradoPerfeito(n) {
    let cont = 1;
    let soma = 0;
    while(soma < n) {
        soma += cont;
        cont += 2;
    }
    if (soma == n) {
        return `O numero ${n} é um quadrado perfeito`
    } else {
        return `O numero ${n} não é um quadrado perfeito`
    }
}

console.log(quadradoPerfeito(256));