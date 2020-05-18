
/**
 * Declaration
 */

 // Function declaration
function helloDeclaration() {
    console.log('Helloooooooooo!! Function declaration');
}

function functionWithParameter(name, skill, description) {
    console.log(`name: ${name}`);
    console.log(`skill: ${skill}`);
    console.log(`description: ${description}`);
}

// Function expression
const helloExpression = function () {
    console.log('Helloooooooooo!! Function expression');
}

// Arrow function
const combinedTwoString = (text1, text2) => {
    // return text1 + text2;
    return `${text1}${text2}`;
}
// short hand arrow function with default parameter
const combinedTwoStringShortHand = (text1 = '', text2 = '') => `${text1}${text2}`;
// ไม่ใส่วงเล็บที่ parameter ก็ได้ ถ้ามี parameter ตัวเดียว
// แต่ Best practice แนะนำให้ใส่ไว้เสมอ
const makePowerTwo = num => num ** 2;

function main() {
    helloDeclaration();
    helloExpression();
    functionWithParameter('Mart', 'cloud developer', 'Software developer who the big fan of Serverless');
    
    console.log(combinedTwoString('Hello', 'TwoString'));
    console.log(combinedTwoStringShortHand('Hello', 'TwoString - Shorthand'));
    console.log(`Make power two: ${makePowerTwo(10)}`);
}


/**
 * Working space
 */
main();

// Make top level as a function
/**
 
(async () => {
    main();
})();

*/

// Make top level to async function
/**
 
(async () => {
    main();
})();

 */
