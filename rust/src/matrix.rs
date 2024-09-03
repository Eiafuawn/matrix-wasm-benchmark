pub fn sum_of_matrix_elements(matrix: &Vec<Vec<f64>>, matrix_size: usize) -> f64 {
    let mut sum = 0.0;
    for i in 0..matrix_size {
        for j in 0..matrix_size {
            sum += matrix[i][j];
        }
    }
    sum
}


pub fn multiply_matrices(
    matrix1: &Vec<Vec<f64>>, 
    matrix2: &Vec<Vec<f64>>, 
    index: usize, 
    matrix_size: usize
) -> Vec<Vec<f64>> {
    let mut result = get_empty_matrix(matrix_size);
    for i in 0..matrix_size {
        for j in 0..matrix_size {
            for k in 0..matrix_size {
                result[i][j] += matrix1[i][k] * matrix2[k][j] + index as f64;
            }
        }
    }
    result
}


pub fn get_empty_matrix(matrix_size: usize) -> Vec<Vec<f64>> {
    vec![vec![0.0; matrix_size]; matrix_size]
}

pub fn fill_sequential_matrix(matrix: &mut Vec<Vec<f64>>, matrix_size: usize) {
    let mut value = 0.0;
    for i in 0..matrix_size {
        for j in 0..matrix_size {
            matrix[i][j] = value;
            value += 1.0;
        }
    }
}

pub fn sum_of_matrix_elements_i64(matrix: &Vec<Vec<i64>>, matrix_size: usize) -> i64 {
    let mut sum = 0;
    for i in 0..matrix_size {
        for j in 0..matrix_size {
            sum += matrix[i][j];
        }
    }
    sum
}


pub fn multiply_matrices_i64(
    matrix1: &Vec<Vec<i64>>, 
    matrix2: &Vec<Vec<i64>>, 
    index: usize, 
    matrix_size: usize
) -> Vec<Vec<i64>> {
    let mut result = get_empty_matrix_i64(matrix_size);
    for i in 0..matrix_size {
        for j in 0..matrix_size {
            for k in 0..matrix_size {
                result[i][j] += matrix1[i][k] * matrix2[k][j] + index as i64;
            }
        }
    }
    result
}


pub fn get_empty_matrix_i64(matrix_size: usize) -> Vec<Vec<i64>> {
    vec![vec![0; matrix_size]; matrix_size]
}

pub fn fill_sequential_matrix_i64(matrix: &mut Vec<Vec<i64>>, matrix_size: usize) {
    let mut value = 0;
    for i in 0..matrix_size {
        for j in 0..matrix_size {
            matrix[i][j] = value;
            value += 1;
        }
    }
}
