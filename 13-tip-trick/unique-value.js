const array = [1, 1, 2, 3, 5, 5, 1];

const uniqueArray = [...new Set(array)];

console.log(uniqueArray); // Result: [1, 2, 3, 5]
