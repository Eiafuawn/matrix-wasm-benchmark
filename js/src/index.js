import {
  matrixOperations,
  matrixOperationsRust,
  matrixOperationsRustI64,
} from './matrixOperations.js';

const matrixSize = Number.parseInt(process.env.MATRIX_SIZE) || 200;

console.log(`Running benchmark for matrix size: ${matrixSize}`);

console.log('Running matrix operations in JavaScript...');
matrixOperations();

console.log('Running matrix operations in WebAssembly (Rust)...');
matrixOperationsRust(matrixSize);

console.log('Running matrix operations in WebAssembly (Rust i64)...');
matrixOperationsRustI64(matrixSize);
