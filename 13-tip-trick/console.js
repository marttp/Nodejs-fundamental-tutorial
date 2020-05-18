// * Reference: https://medium.com/@mattburgess/beyond-console-log-2400fdf4a9d8

/**
 * Print output
 */
console.log('From console.log()');

/**
 * Print value by object
 */
console.log({
    message: 'Debug message'
});
console.log({
    output: 'From console.log()'
});

/**
 * Execution time
 */
console.time('summation')
let sum = 0;
for (let i = 0; i < 10 ** 8; i++) {
    sum += i;
}
console.log(sum);
console.timeEnd('summation')