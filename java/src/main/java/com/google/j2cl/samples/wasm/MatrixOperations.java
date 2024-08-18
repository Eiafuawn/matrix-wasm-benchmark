package com.google.j2cl.samples.wasm;

public class MatrixOperations() {
    public static void doMatrixOperations() {
        int[][] matrix1 = getEmptyMatrix();
        int[][] matrix2 = getEmptyMatrix();
        fillSequentialMatrix(matrix1);
        fillSequentialMatrix(matrix2);
        int total_sum = 0;
        for (int i = 0; i < 100; i++) {
            int result = multiplyMatrices(matrix1, matrix2);
            total_sum += sumOfMatrixElements(result);
        }
        
        System.out.println("Total sum of all matrix elements: " + total_sum);
    }
}