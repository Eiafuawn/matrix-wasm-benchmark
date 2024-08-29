package com.google.j2cl.samples.wasm;

public class Matrix {
    final static int MATRIX_SIZE = 200;
    public static Long sumOfMatrixElements(Long[][] matrix) {
        Long sum = 0L;
        for (int i = 0; i < MATRIX_SIZE; i++) {
            for (int j = 0; j < MATRIX_SIZE; j++) {
                sum += matrix[i][j];
            }
        }
        return sum;
    }

    public static Long[][] multiplyMatrices(Long[][] matrix1, Long[][] matrix2, int index) {
        Long[][] result = getEmptyMatrix();
        for (int i = 0; i < MATRIX_SIZE; i++) {
            for (int j = 0; j < MATRIX_SIZE; j++) {
                for (int k = 0; k < MATRIX_SIZE; k++) {
                    result[i][j] += matrix1[i][k] * matrix2[k][j] + index;
                }
            }
        }
        return result;
    }

    public static Long[][] getEmptyMatrix() {
        Long[][] matrix = new Long[MATRIX_SIZE][MATRIX_SIZE];
        for (int i = 0; i < MATRIX_SIZE; i++) {
            for (int j = 0; j < MATRIX_SIZE; j++) {
                matrix[i][j] = 0L; // Initialize each element to 0L
            }
        }
        return matrix;
    }

    public static Long[][] fillSequentialMatrix(Long[][] matrix) {
        Long value = 0L;
        for (int i = 0; i < MATRIX_SIZE; i++) {
            for (int j = 0; j < MATRIX_SIZE; j++) {
                matrix[i][j] = value++;
            }
        }
        return matrix;
    }
}