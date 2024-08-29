package com.google.j2cl.samples.wasm;
import static com.google.j2cl.samples.wasm.Matrix.*;

public class MatrixOperations {
    public static String doMatrixOperations() {
        Long[][] matrix1 = getEmptyMatrix();
        Long[][] matrix2 = getEmptyMatrix();
        fillSequentialMatrix(matrix1);
        fillSequentialMatrix(matrix2);
        Long total_sum = 0L;
        for (int i = 0; i < 100; i++) {
            Long[][] result = multiplyMatrices(matrix1, matrix2, i);
            total_sum += sumOfMatrixElements(result);
        }
        return total_sum.toString();
    }
}