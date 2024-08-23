mod utils;
mod matrix;

use wasm_bindgen::prelude::*;
use matrix::{
    sum_of_matrix_elements,
    multiply_matrices,
    fill_sequential_matrix,
    get_empty_matrix,
};

#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);
}

// This function measures the performance of the matrix operations

#[wasm_bindgen]
pub fn measure_performance() -> f64 {
    let window = web_sys::window().unwrap();
    let performance = window.performance().unwrap();

    let start = performance.now();

    let total_sum = matrix_operations(200);
    
    let end = performance.now();
    alert(&format!("total_sum {}, Duration: {} ms",  total_sum, end - start));

    end - start
}

// This function performs simple matrix operations
#[wasm_bindgen]
pub fn matrix_operations(matrix_size: usize) -> f64 {
    let mut matrix1 = get_empty_matrix(matrix_size);
    let mut matrix2 = get_empty_matrix(matrix_size);
    fill_sequential_matrix(&mut matrix1, matrix_size);
    fill_sequential_matrix(&mut matrix2, matrix_size);
    
    let mut total_sum = 0.0;
    for i in 0..100 {
        let result = multiply_matrices(&matrix1, &matrix2, i, matrix_size);
        total_sum += sum_of_matrix_elements(&result, matrix_size);
    }

    return total_sum;
}