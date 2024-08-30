#!/bin/bash

# Define an array of matrix sizes to test
if [ "$#" -eq 0 ]; then
    sizes=(100 200 300 400 500)
else
    sizes=("$@")
    echo "Testing with custom sizes: ${sizes[@]}"
fi 

# Loop through each size and run the JavaScript and Rust benchmarks
for size in "${sizes[@]}"; do
    echo "Testing with MATRIX_SIZE=$size"

    # Run JavaScript benchmark
    (cd js && MATRIX_SIZE=$size node src/index.js)

    echo ""
done