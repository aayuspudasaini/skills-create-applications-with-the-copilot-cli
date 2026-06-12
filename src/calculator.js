// Supported operations:
// - addition
// - subtraction
// - multiplication
// - division

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

module.exports = {
  addition,
  subtraction,
  multiplication,
  division,
};
