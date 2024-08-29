package com.google.j2cl.samples.wasm;
import static com.google.j2cl.samples.wasm.Matrix.*;

public class MatrixOperations {
    public static String doMatrixOperations(int matrixSize) {
        Matrix.matrixSize = matrixSize != 0 ? matrixSize : 200;
        long[][] matrix1 = getEmptyMatrix();
        long[][] matrix2 = getEmptyMatrix();
        fillSequentialMatrix(matrix1);
        fillSequentialMatrix(matrix2);
        long total_sum = 0L;
        for (int i = 0; i < 100; i++) {
            long[][] result = multiplyMatrices(matrix1, matrix2, i);
            total_sum += sumOfMatrixElements(result);
        }
        return Long.toString(total_sum);
    }
}