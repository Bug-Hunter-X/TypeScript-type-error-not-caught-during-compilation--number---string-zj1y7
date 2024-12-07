function add(a: number, b: number): number {
  return a + b;
}

const result = add(5, '10'); // Type error expected
console.log(result); // This line will not be reached