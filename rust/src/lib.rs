mod utils;
mod matrix;

use wasm_bindgen::prelude::*;
use matrix::{
    sum_of_matrix_elements,
    multiply_matrices,
    fill_sequential_matrix,
    get_empty_matrix
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

    let total_sum = matrix_operations();
    
    let end = performance.now();
    alert(&format!("total_sum {}, Duration: {} ms",  total_sum, end - start));

    end - start
}

// This function performs simple matrix operations
#[wasm_bindgen]
pub fn matrix_operations() -> f64 {
    let mut matrix1 = get_empty_matrix();
    let mut matrix2 = get_empty_matrix();
    fill_sequential_matrix(&mut matrix1);
    fill_sequential_matrix(&mut matrix2);
    
    let mut total_sum = 0.0;
    for i in 0..100 {
        let result = multiply_matrices(&matrix1, &matrix2, i);
        total_sum += sum_of_matrix_elements(&result);
    }

    return total_sum;
}