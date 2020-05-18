/**
 * To Boolean
 */
const isTrue = !0;
const isFalse = !1;
const alsoFalse = !!0;
console.log(isTrue); // Result: true
console.log(typeof true); // Result: "boolean"

/**
 * To Number
 */
let int = "15";
int = +int;
console.log(int); // Result: 15
console.log(typeof int); // Result: "number"

/**
 * Float to Integer
 */
console.log(23.9 | 0); // Result: 23
console.log(-23.9 | 0); // Result: -23
