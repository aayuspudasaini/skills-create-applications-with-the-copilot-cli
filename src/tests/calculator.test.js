const test = require('node:test');
const assert = require('node:assert/strict');

const {
  addition,
  subtraction,
  multiplication,
  division,
} = require('../calculator');

test('addition adds two numbers', () => {
  assert.equal(addition(5, 3), 8);
});

test('subtraction subtracts second number from first', () => {
  assert.equal(subtraction(5, 3), 2);
});

test('multiplication multiplies two numbers', () => {
  assert.equal(multiplication(5, 3), 15);
});

test('division divides first number by second', () => {
  assert.equal(division(6, 3), 2);
});
