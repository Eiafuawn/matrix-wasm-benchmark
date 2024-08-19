package com.google.j2cl.samples.wasm;

public class Matrix {
    final static int MATRIX_SIZE = 10;
    public static int sumOfMatrixElements(int[][] matrix) {
        int sum = 0;
        for (int i = 0; i < MATRIX_SIZE; i++) {
            for (int j = 0; j < MATRIX_SIZE; j++) {
                sum += matrix[i][j];
            }
        }
        return sum;
    }

    public static int[][] multiplyMatrices(int[][] matrix1, int[][] matrix2, int index) {
        int[][] result = getEmptyMatrix();
        for (int i = 0; i < MATRIX_SIZE; i++) {
            for (int j = 0; j < MATRIX_SIZE; j++) {
                for (int k = 0; k < MATRIX_SIZE; k++) {
                    result[i][j] += matrix1[i][k] * matrix2[k][j] + index;
                }
            }
        }
        return result;
    }

    public static int[][] getEmptyMatrix() {
        int[][] matrix = new int[MATRIX_SIZE][MATRIX_SIZE];
        return matrix;
    }

    public static void fillSequentialMatrix(int[][] matrix) {
        int value = 0;
        for (int i = 0; i < MATRIX_SIZE; i++) {
            for (int j = 0; j < MATRIX_SIZE; j++) {
                matrix[i][j] = value++;
            }
        }
    }
}