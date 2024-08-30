import { readFileSync } from 'node:fs';

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
  console.time('multiplyMatrices');
  const matrix1 = getEmptyMatrix();
  const matrix2 = getEmptyMatrix();
  fillSequencialyMatrix(matrix1);
  fillSequencialyMatrix(matrix2);

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
 * This function calls the matrix_operations function from the Rust module.
 */
export function matrixOperationsRust() {
  const matrixSize = Number.parseInt(process.env.MATRIX_SIZE) || 200;
  // Initialize the wasm module
  wasm.initSync(
    readFileSync(`${__dirname}/../../rust/pkg/matrix_wasm_rust_bg.wasm`),
  );
  console.log('Wasm initialized');

  console.time('multiplyMatricesRust');
  let result = wasm.matrix_operations(matrixSize);
  console.timeEnd('multiplyMatricesRust');
  console.log('Total sum:', result);

  return result;
}
