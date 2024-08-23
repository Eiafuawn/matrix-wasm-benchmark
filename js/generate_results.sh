#!/bin/bash

# Run the test and capture the output
test_output=$(npm run test-only 2>&1)

# Extract the relevant lines using grep
matrix_time=$(echo "$test_output" | grep "multiplyMatrices:" | sed 's/multiplyMatrices: //g')
rust_time=$(echo "$test_output" | grep "multiplyMatricesRust:" | sed 's/multiplyMatricesRust: //g')
total_sum=$(echo "$test_output" | grep "Total sum:" | head -n 1 | awk '{print $3}')

# Create the markdown table
echo "| Operation                   | Time Taken   | Total Sum              |"
echo "| --------------------------- | ------------ | ---------------------- |"
echo "| JavaScript Matrix Multiply  | $matrix_time       | $total_sum     |"
echo "| Rust Matrix Multiply        | $rust_time       | $total_sum     |"
