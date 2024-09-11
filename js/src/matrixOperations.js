import { readFileSync } from 'node:fs';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import * as wasm from 'matrix-wasm-rust';

import {
  getEmptyMatrix,
  fillSequencialyMatrix,
  multiplyMatrices,
  sumOfMatrixElements,
} from './matrix.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * This function multiplies two matrices 100 times and sums the result of each multiplication.
 * @returns {Object}
 */
export function matrixOperations() {
  const start = performance.now();
  let results = {
    Time: '',
    Sum: '',
  };
  const matrix1 = getEmptyMatrix();
  const matrix2 = getEmptyMatrix();
  fillSequencialyMatrix(matrix1);
  fillSequencialyMatrix(matrix2);

  let totalSum = 0;
  for (let i = 0; i < 100; i++) {
    const result = multiplyMatrices(matrix1, matrix2, i);
    totalSum += sumOfMatrixElements(result);
  }

  const end = performance.now();
  console.log(`Total sum: ${totalSum} in ${end - start}ms`);
  results.Time = (end - start).toString();
  results.Sum = totalSum.toString();
  return results;
}

/**
 * This function calls the matrix_operations function from the Rust module.
 * @param matrixSize
 * @returns {Object}
 */
export function matrixOperationsRust(matrixSize = 200) {
  let results = {
    Time: '',
    Sum: '',
  };
  // Initialize the wasm module
  wasm.initSync(
    readFileSync(`${__dirname}/../../rust/pkg/matrix_wasm_rust_bg.wasm`),
  );
  console.log('Wasm initialized');

  const start = performance.now();
  let result = wasm.matrix_operations(matrixSize);
  const end = performance.now();
  const resultStr = `Total sum: ${result} in ${end - start}ms`;
  console.log(resultStr);

  results.Time = (end - start).toString();
  results.Sum = result.toString();
  return results;
}

/**
 * This function calls the matrix_operations_i64 function from the Rust module.
 * @param matrixSize
 * @returns {Object}
 */
export function matrixOperationsRustI64(matrixSize = 200) {
  let results = {
    Time: '',
    Sum: '',
  };
  // Initialize the wasm module
  wasm.initSync(
    readFileSync(`${__dirname}/../../rust/pkg/matrix_wasm_rust_bg.wasm`),
  );
  console.log('Wasm initialized');

  const start = performance.now();
  let result = wasm.matrix_operations_i64(matrixSize);
  const end = performance.now();
  const resultStr = `Total sum: ${result} in ${end - start}ms`;
  console.log(resultStr);

  results.Time = (end - start).toString();
  results.Sum = result.toString();
  return results;
}
