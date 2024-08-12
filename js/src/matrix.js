const matrixSize = 10;

export function sumOfMatrixElements(matrix) {
  let sum = 0;
  for (let i = 0; i < matrixSize; i++) {
    for (let j = 0; j < matrixSize; j++) {
      sum += matrix[i][j];
    }
  }
  return sum;
}

/**
 * 
 * @param {*} matrix1 
 * @param {*} matrix2 
 * @param {*} index - We want to be sure that there is no internal optimization during testing 
 * @returns 
 */
export function multiplyMatrices(matrix1, matrix2, index) {
  const result = getEmptyMatrix()
  for (let i = 0; i < matrixSize; i++) {
    for (let j = 0; j < matrixSize; j++) {
      for (let k = 0; k < matrixSize; k++) {
        result[i][j] += matrix1[i][k] * matrix2[k][j] + index; // We add index to avoid internal optimization
      }
    }
  }
  return result
}

export function getEmptyMatrix() {
  return new Array(matrixSize).fill(0).map(() => new Array(matrixSize).fill(0));
}

export function fillSequencialyMatrix(matrix) {
  let value = 0;
  for (let i = 0; i < matrixSize; i++) {
    for (let j = 0; j < matrixSize; j++) {
      matrix[i][j] = value++;
    }
  }
  return matrix
}
