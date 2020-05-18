/**
 * Rest parameter
 */
const summation = (...number) => {
    // let sum = 0;
    // number.map(val => sum += val);
    // return sum;
    return number.reduce((previousValue, currentValue) => previousValue += currentValue, 0);
}

console.log(summation(1, 2, 3, 4, 5)); // 15
