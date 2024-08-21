const MATRIX_SIZE: usize = 200;

pub fn sum_of_matrix_elements(matrix: &Vec<Vec<f64>>) -> f64 {
    let mut sum = 0.0;
    for i in 0..MATRIX_SIZE {
        for j in 0..MATRIX_SIZE {
            sum += matrix[i][j];
        }
    }
    sum
}

pub fn multiply_matrices(matrix1: &Vec<Vec<f64>>, matrix2: &Vec<Vec<f64>>, index: usize) -> Vec<Vec<f64>> {
    let mut result = get_empty_matrix();
    for i in 0..MATRIX_SIZE {
        for j in 0..MATRIX_SIZE {
            for k in 0..MATRIX_SIZE {
                result[i][j] += matrix1[i][k] * matrix2[k][j] + index as f64;
            }
        }
    }
    result
}

pub fn get_empty_matrix() -> Vec<Vec<f64>> {
    vec![vec![0.0; MATRIX_SIZE]; MATRIX_SIZE]
}

pub fn fill_sequential_matrix(matrix: &mut Vec<Vec<f64>>) {
    let mut value = 0.0;
    for i in 0..MATRIX_SIZE {
        for j in 0..MATRIX_SIZE {
            matrix[i][j] = value;
            value += 1.0;
        }
    }
}
