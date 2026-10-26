// This function adds two numbers
function calculateSum(a, b) {

    // Add a and b and store the answer in result
    const result = a + b;

    // Print the result on the console
    console.log("Sum:", result);
}


// Import calculateMultiply function from multiply.js
const { calculateMultiply } = require("./multiply.js");


// Store the name in a variable
var name = "komal";


// Store first number
var a = 10;

// Store second number
var b = 20;


// Call calculateSum function
// a = 10, b = 20
// Output: Sum: 30
calculateSum(a, b);


// Call calculateMultiply function
// a = 10, b = 20
// Output: Multiplication: 200
calculateMultiply(a, b);


// Export calculateSum function
// So another JavaScript file can use this function
module.exports = { calculateSum };