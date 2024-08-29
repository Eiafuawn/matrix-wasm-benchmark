package com.google.j2cl.samples.wasm;

public class Matrix {
    static int matrixSize = 200;
    public static double sumOfMatrixElements(double[][] matrix) {
        double sum = 0L;
        for (int i = 0; i < matrixSize; i++) {
            for (int j = 0; j < matrixSize; j++) {
                sum += matrix[i][j];
            }
        }
        return sum;
    }

    public static double[][] multiplyMatrices(double[][] matrix1, double[][] matrix2, int index) {
        double[][] result = getEmptyMatrix();
        for (int i = 0; i < matrixSize; i++) {
            for (int j = 0; j < matrixSize; j++) {
                for (int k = 0; k < matrixSize; k++) {
                    result[i][j] += matrix1[i][k] * matrix2[k][j] + index;
                }
            }
        }
        return result;
    }

    public static double[][] getEmptyMatrix() {
        double[][] matrix = new double[matrixSize][matrixSize];
        return matrix;
    }

    public static double[][] fillSequentialMatrix(double[][] matrix) {
        double value = 0L;
        for (int i = 0; i < matrixSize; i++) {
            for (int j = 0; j < matrixSize; j++) {
                matrix[i][j] = value++;
            }
        }
        return matrix;
    }
}