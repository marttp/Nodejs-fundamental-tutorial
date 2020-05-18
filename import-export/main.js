const util = require('./util');
const calculator = require('./calculator');
// const { add, minus, multiply, divide } = require('./calculator');

const operand1 = util.getRandomNumber(20);
const operand2 = util.getRandomNumber(10);
console.log(operand1);
console.log(operand2);
console.log(calculator.add(operand1, operand2));