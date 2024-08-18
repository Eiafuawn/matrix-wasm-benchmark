import { expect, test } from 'vitest';

import { matrixOperations } from '..';

test('Should return the expected total sum', () => {
  const expectedResult = 258225000;
  expect(matrixOperations()).toStrictEqual(expectedResult);
});
