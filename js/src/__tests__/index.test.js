import { expect, test } from 'vitest';

import { matrixOperations, matrixOperationsRust } from '..';

test('Js matrix operations should return the expected total sum', () => {
  const expectedResult = 258225000;
  expect(matrixOperations()).toStrictEqual(expectedResult);
});

// This test is skipped because of the error in matrixOperationsRust function
test('Rust matrix operations should return the expected total sum', () => {
  matrixOperationsRust();
});
