import * as wasm from 'matrix-wasm-rust';

import {
  getEmptyMatrix,
  fillSequencialyMatrix,
  multiplyMatrices,
  sumOfMatrixElements,
} from './matrix';

/**
 * This function multiplies two matrices 100 times and sums the result of each multiplication.
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

/**
 * Doesn't work because the wasm binary doesn't seem to be initialized when used this way
 * The error is TypeError: Cannot read properties of undefined (reading 'matrix_operations')
 * I still need to look for a solution to this problem
 * it's possible that only vitest is a problem, but I'm not sure yet
 */
export function matrixOperationsRust() {
  console.time('multiplyMatricesRust');
  wasm.matrix_operations();
  console.timeEnd('multiplyMatricesRust');
}
