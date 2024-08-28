import { expect, test } from 'vitest';

import { matrixOperations, matrixOperationsRust } from '..';

test('Js matrix operations should return the expected total sum', () => {
  let jsResult = matrixOperations();
  let rustResult = matrixOperationsRust();
  expect(jsResult).toStrictEqual(rustResult);
  console.log('Factor = {}', jsResult / rustResult);
});
