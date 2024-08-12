import {
  getEmptyMatrix,
  fillSequencialyMatrix,
  multiplyMatrices,
  sumOfMatrixElements,
} from './matrix';
/**
 * Returns a very important number
 * @returns {number}
 */
export function matrixOperations() {
  const matrix1 = getEmptyMatrix();
  const matrix2 = getEmptyMatrix();
  fillSequencialyMatrix(matrix1);
  fillSequencialyMatrix(matrix2);

  console.time('multiplyMatrices');
  let totalSum = 0;
  for (let i = 0; i < 100; i++) {
    const result = multiplyMatrices(matrix1, matrix2, i);
    totalSum += sumOfMatrixElements(result);
  }
  console.timeEnd('multiplyMatrices');
  console.log('Total sum:', totalSum);

  return totalSum;
}
