package com.google.j2cl.samples.wasm;

public class Matrix {
    static int matrixSize = 200;
    public static long sumOfMatrixElements(long[][] matrix) {
        long sum = 0L;
        for (int i = 0; i < matrixSize; i++) {
            for (int j = 0; j < matrixSize; j++) {
                sum += matrix[i][j];
            }
        }
        return sum;
    }

    public static long[][] multiplyMatrices(long[][] matrix1, long[][] matrix2, int index) {
        long[][] result = getEmptyMatrix();
        for (int i = 0; i < matrixSize; i++) {
            for (int j = 0; j < matrixSize; j++) {
                for (int k = 0; k < matrixSize; k++) {
                    result[i][j] += matrix1[i][k] * matrix2[k][j] + index;
                }
            }
        }
        return result;
    }

    public static long[][] getEmptyMatrix() {
        long[][] matrix = new long[matrixSize][matrixSize];
        return matrix;
    }

    public static long[][] fillSequentialMatrix(long[][] matrix) {
        long value = 0L;
        for (int i = 0; i < matrixSize; i++) {
            for (int j = 0; j < matrixSize; j++) {
                matrix[i][j] = value++;
            }
        }
        return matrix;
    }
}