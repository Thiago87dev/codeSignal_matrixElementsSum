// Minha solução -- Melhor sulução
function solution(matrix) {
    let soma = 0
    for (let i = 0, soma = 0; i < matrix[0].length; i++) {
        for (let j of matrix) {
            if (j[i] === 0) break
            soma += j[i]
        }
    }
    return soma
}

console.log(solution(
    [[0, 1, 1, 2],
    [0, 5, 0, 0],
    [2, 0, 3, 3]]));