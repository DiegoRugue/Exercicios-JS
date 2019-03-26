/* 
 * 3) Escreva um programa que receba como entrada um número inteiro N 
 * e calcule as N linhas do triângulo de pascal.
*/ 

function fatorial(n){
    if (n <= 1){
        return 1;
    } else {
        return n * fatorial(n - 1);
    }
}

function triangulo(n){
    let matriz = [];
    for (let i = 0; i < n; i++) {
        matriz[i] = [];
        matriz[i][0] = 1;
        matriz[i][i] = 1;
        for (let j = 1; j < i; j++) {
            matriz[i][j] = fatorial(i) / (fatorial(i - j) * fatorial(j));
        }
        console.log(matriz[i] + '\n');
    }
}

triangulo(7);




