import fs from 'node:fs';
import path from 'node:path';

import tablemark from 'tablemark';

import {
  matrixOperations,
  matrixOperationsRust,
  matrixOperationsRustI64,
} from './matrixOperations.js';

const matrixSize = Number.parseInt(process.env.MATRIX_SIZE) || 200;
const resultsFile = path.resolve('benchmark-results.md');

function parseMarkdownTable(markdown) {
  const lines = markdown.trim().split('\n');
  if (lines.length < 3) return []; // Return empty array if there's no data

  const headers = lines[0]
    .split('|')
    .map((h) => h.trim())
    .filter(Boolean);
  const results = [];

  for (let i = 2; i < lines.length; i++) {
    const values = lines[i]
      .split('|')
      .map((v) => v.trim())
      .filter(Boolean);
    if (values.length === headers.length) {
      const row = {};
      for (const [index, header] of headers.entries()) {
        row[header] = values[index];
      }
      results.push(row);
    }
  }

  return results;
}

async function runBenchmark() {
  console.log(`Running benchmark for matrix size: ${matrixSize}`);

  const newResult = {
    Date: new Date().toISOString(),
    'Matrix size': matrixSize,
    'Js time': '',
    'Js result': '',
    'Rust time': '',
    'Rust result': '',
    'Rust i64 time': '',
    'Rust i64 result': '',
  };

  const JsResults = matrixOperations();
  const RustResults = matrixOperationsRust(matrixSize);
  const RustI64Results = matrixOperationsRustI64(matrixSize);
  newResult['Js time'] = JsResults.Time;
  newResult['Js result'] = JsResults.Sum;
  newResult['Rust time'] = RustResults.Time;
  newResult['Rust result'] = RustResults.Sum;
  newResult['Rust i64 time'] = RustI64Results.Time;
  newResult['Rust i64 result'] = RustI64Results.Sum;

  let existingResults = [];
  if (fs.existsSync(resultsFile)) {
    const content = fs.readFileSync(resultsFile, 'utf8');
    existingResults = parseMarkdownTable(content);
  }

  existingResults.push(newResult);
  const table = tablemark(existingResults);

  fs.writeFileSync(resultsFile, table);
  console.log('New result added to benchmark-results.md');
}

await runBenchmark();
console.log('Benchmark completed');
