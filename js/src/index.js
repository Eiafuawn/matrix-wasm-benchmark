import { matrixOperations, matrixOperationsRust } from './matrixOperations.js';

const matrixSize = Number.parseInt(process.env.MATRIX_SIZE) || 200;

console.log('Running matrix operations in JavaScript...');
const jsResult = matrixOperations(); // This will execute the matrix operations in JavaScript

console.log('Running matrix operations in WebAssembly (Rust)...');
const rustResult = matrixOperationsRust(matrixSize); // This will execute the matrix operations in WASM via Rust

console.log('Comparing results...');
console.log(`JavaScript result: ${jsResult}`);
console.log(`WebAssembly (Rust) result: ${rustResult}`);
