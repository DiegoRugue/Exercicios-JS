// 7) Faça um algoritmo para calcular a transposta de uma matriz.

function transposta() {
    let matriz = [];
    let matriz2 = [];
    let n = 1;
    for (let i = 0; i < 5; i++) {
        matriz[i] = [];
        for (let j = 0; j < 5; j++) {
            matriz[i][j] = n ++;
        }
    }

    for (let i = 0; i < 5; i++) {
        matriz2[i] = [];
        for (let j = 0; j < 5; j++) {
            matriz2[i][j] = matriz[j][i];
        }
        
    }
    console.log(matriz)
    console.log(matriz2)
}

transposta();