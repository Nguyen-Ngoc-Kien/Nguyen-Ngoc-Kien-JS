const matrix = [
    [1,2,3],
    [4,5,6], 
    [9,10,11]
]

function changeMatrix(matrix){
    const rowCount = matrix.length;
    const colCount = matrix[0].length;
    const newMatrix = Array.from({ length: colCount }, () => Array(rowCount).fill(0));
    for(let i = 0; i < rowCount; i++){
        for(let j = 0; j < colCount; j++){
            newMatrix[i][j] = matrix[colCount - 1 - j][i]
        }
    }
    
    return console.log(newMatrix)
}

changeMatrix(matrix)