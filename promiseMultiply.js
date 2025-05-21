// Write a function named 'multiplyByTwo' that takes an array of numbers as input and returns a promise. 
// The promise should resolve with a new array where each number from the input array has been multiplied by 2. 
// If the input array is empty, the promise should reject with an error message 'Input array is empty'.

function multiplyByTwo(arr) {
    // write your code here
}
  
  // Example input and output
  console.log(multiplyByTwo([1, 2, 3])); // Output: Promise { <pending> }
  console.log(multiplyByTwo([])); // Output: Promise { <rejected> 'Input array is empty' }