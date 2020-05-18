const chalk = require('chalk');
const utils = require('./utils');
const myArgs = process.argv.slice(2);
console.log({ myArgs });

const reverseResult = utils.reverseArray([1,2,3,4,5]);
console.log(chalk.cyan.bgGrey(reverseResult));

const sum = utils.summation([1,2,3,4,5]);
console.log(chalk.blue.bgRed(sum));

const powerTwoList = utils.powerOfTwo([1,2,3,4,5]);
console.log(chalk.blue.bold(powerTwoList));