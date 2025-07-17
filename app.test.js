const { add, subtract } = require('./app');

test('penjumlahan 2 + 3 = 5', () => {
  expect(add(2, 3)).toBe(5);
});

test('pengurangan 5 - 2 = 3', () => {
  expect(subtract(5, 2)).toBe(3);
});
