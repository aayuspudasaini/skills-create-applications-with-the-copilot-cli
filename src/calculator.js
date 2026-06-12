#!/usr/bin/env node

// Supported operations: addition, subtraction, multiplication, division
function addition(a, b) {
  return a + b;
}

function subtraction(a, b) {
  return a - b;
}

function multiplication(a, b) {
  return a * b;
}

function division(a, b) {
  return a / b;
}

const operations = {
  addition,
  subtraction,
  multiplication,
  division,
};

if (require.main === module) {
  const [operation, left, right] = process.argv.slice(2);
  const fn = operations[operation];

  if (!fn) {
    console.error('Unknown operation. Use one of: addition, subtraction, multiplication, division.');
    process.exit(1);
  }

  const a = Number(left);
  const b = Number(right);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    console.error('Both operands must be valid numbers.');
    process.exit(1);
  }

  console.log(`${operation}(${a}, ${b}) = ${fn(a, b)}`);
}

module.exports = {
  addition,
  subtraction,
  multiplication,
  division,
};
