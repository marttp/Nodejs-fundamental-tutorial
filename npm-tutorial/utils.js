const reverseArray = (array = []) => {
    if (!array.length) {
        return [];
    }
    return array.reverse();
};

const summation = (...nums) => {
    if (!nums.length) {
        return 0;
    }
    return nums.reduce((prev, curr) => prev += curr, 0);
}

const powerOfTwo = (array = []) => {
    if (!array.length) {
        return [];
    };
    return array.map(value => value * value);
}

module.exports = {
    reverseArray,
    summation,
    powerOfTwo
}