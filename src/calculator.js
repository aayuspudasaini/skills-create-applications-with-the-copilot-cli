// Supported operations:
// - addition
// - subtraction
// - multiplication
// - division
// - modulo
// - power
// - square root

function ensureNumber(value, name) {
  if (typeof value !== 'number' || Number.isNaN(value) || !Number.isFinite(value)) {
    throw new TypeError(`${name} must be a finite number`);
  }
}

function addition(a, b) {
  ensureNumber(a, 'a');
  ensureNumber(b, 'b');
  return a + b;
}

function subtraction(a, b) {
  ensureNumber(a, 'a');
  ensureNumber(b, 'b');
  return a - b;
}

function multiplication(a, b) {
  ensureNumber(a, 'a');
  ensureNumber(b, 'b');
  return a * b;
}

function division(a, b) {
  ensureNumber(a, 'a');
  ensureNumber(b, 'b');

  if (b === 0) {
    throw new RangeError('Cannot divide by zero');
  }

  return a / b;
}

function modulo(a, b) {
  ensureNumber(a, 'a');
  ensureNumber(b, 'b');

  return a % b;
}

function power(base, exponent) {
  ensureNumber(base, 'base');
  ensureNumber(exponent, 'exponent');

  return base ** exponent;
}

function squareRoot(n) {
  ensureNumber(n, 'n');

  if (n < 0) {
    throw new RangeError('Cannot take square root of a negative number');
  }

  return Math.sqrt(n);
}

module.exports = {
  addition,
  subtraction,
  multiplication,
  division,
  modulo,
  power,
  squareRoot,
};
