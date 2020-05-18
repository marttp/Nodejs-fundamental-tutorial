/**
 * ตัด array
 */

let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
array.length = 4;
console.log(array); // Result: [0, 1, 2, 3]

// * OR
let secondArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
secondArray = secondArray.slice(0, 4);
console.log(secondArray); // Result: [0, 1, 2, 3]