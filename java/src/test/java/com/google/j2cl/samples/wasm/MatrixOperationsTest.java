package com.google.j2cl.samples.wasm;

import static org.junit.Assert.assertEquals;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.JUnit4;

/** Matrix operations test */
@RunWith(JUnit4.class)
public class MatrixOperationsTest {
  @Test
  public void testMatrixOperations() {
        assertNotNull(MatrixOperations.doMatrixOperations());
  }
}
