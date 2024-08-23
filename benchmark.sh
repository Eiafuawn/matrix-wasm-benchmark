#!/bin/bash

# Define an array of matrix sizes to test
sizes=(100 200 300 400 500)

# Loop through each size and run the JavaScript and Rust benchmarks
for size in "${sizes[@]}"; do
    echo "Testing with MATRIX_SIZE=$size"

    # Run JavaScript benchmark
    (cd js && MATRIX_SIZE=$size npm run test-only)

    echo ""
done