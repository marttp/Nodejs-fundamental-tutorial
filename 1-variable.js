var variableWithVar = 10;
let variableWithLet = 10;
const constantVariable = 10;

let firstName = 'Thomas';
let lastName = 'Dodo';

// Template literal
console.log(`${firstName} ${lastName}`);

firstName = 'David';

console.log(`${firstName} ${lastName}`);


const urlServer = 'https://sample-server.com';
console.log(urlServer);
// urlServer = 'https://sample.com';
// console.log(urlServer);
/**
 * ! TypeError: Assignment to constant variable
 */

/**
 * Data Type
 */
// * Number
const numberInteger = 20;
const numberDecimal = 20.5;
// * String
const text = 'Hello world';
// * Array
const array = [1, 2, 3, 4, 5];
// * Object
const obj = {
  key: 'value',
};
// * Boolean
const isOkay = true;
const isNotOkey = false;