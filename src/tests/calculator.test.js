const test = require('node:test');
const assert = require('node:assert/strict');

const calculator = require('../calculator');

test('addition handles the basic example from the image', () => {
  assert.strictEqual(calculator.addition(2, 3), 5);
});

test('addition supports negative and decimal values', () => {
  assert.strictEqual(calculator.addition(-2, 0.5), -1.5);
});

test('subtraction handles the basic example from the image', () => {
  assert.strictEqual(calculator.subtraction(10, 4), 6);
});

test('subtraction supports negative results', () => {
  assert.strictEqual(calculator.subtraction(4, 10), -6);
});

test('multiplication handles the basic example from the image', () => {
  assert.strictEqual(calculator.multiplication(45, 2), 90);
});

test('multiplication handles zero', () => {
  assert.strictEqual(calculator.multiplication(7, 0), 0);
});

test('division handles the basic example from the image', () => {
  assert.strictEqual(calculator.division(20, 5), 4);
});

test('division supports decimal results', () => {
  assert.strictEqual(calculator.division(7, 2), 3.5);
});

test('division by zero throws a RangeError', () => {
  assert.throws(() => calculator.division(10, 0), RangeError);
});

test('modulo returns the remainder', () => {
  assert.strictEqual(calculator.modulo(10, 3), 1);
});

test('modulo by zero throws a RangeError', () => {
  assert.throws(() => calculator.modulo(10, 0), RangeError);
});

test('power returns base raised to exponent', () => {
  assert.strictEqual(calculator.power(2, 3), 8);
});

test('power supports negative exponents', () => {
  assert.strictEqual(calculator.power(2, -1), 0.5);
});

test('square root returns the positive root for perfect squares', () => {
  assert.strictEqual(calculator.squareRoot(81), 9);
});

test('square root of negative numbers throws a RangeError', () => {
  assert.throws(() => calculator.squareRoot(-1), RangeError);
});
