function add(a: number, b: number): number {
  return a + b;
}

function isNumber(x: any): x is number {
  return typeof x === 'number';
}

function addSafe(a: any, b: any): number | string {
  if (isNumber(a) && isNumber(b)) {
    return add(a, b);
  } else {
    return 'Error: Inputs must be numbers';
  }
}

const result1 = addSafe(5, 10); // Correct usage, returns number
const result2 = addSafe(5, '10'); // Incorrect usage, returns a string indicating error
const result3 = addSafe('5', 10); // Incorrect usage, returns a string indicating error
const result4 = addSafe('5','10'); // Incorrect usage, returns a string indicating error
console.log(result1); // 15
console.log(result2); // Error: Inputs must be numbers
console.log(result3); // Error: Inputs must be numbers
console.log(result4); // Error: Inputs must be numbers