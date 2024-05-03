// Test case 1: Addition
const calculator1 = new Calculator();
calculator1.add(5);
console.log("Result:", calculator1.result); // Expected output: 5

// Test case 2: Subtraction
const calculator2 = new Calculator();
calculator2.subtract(2);
console.log("Result:", calculator2.result); // Expected output: -2

// Test case 3: Multiplication
const calculator3 = new Calculator();
calculator3.multiply(3);
console.log("Result:", calculator3.result); // Expected output: 0

// Test case 4: Division
const calculator4 = new Calculator();
calculator4.divide(4);
console.log("Result:", calculator4.result); // Expected output: 0

// Test case 5: Division by zero
const calculator5 = new Calculator();
calculator5.divide(0); // Error message will be logged to the console
console.log("Result:", calculator5.result); // Expected output: 0