const utils = require('../utils');

describe('Utility functions', () => {
    
    test('should reverse array', () => {
        const reverseResult = utils.reverseArray([1, 2, 3, 4, 5]);
        expect(reverseResult).toEqual([5, 4, 3, 2, 1]);
    });

    test('should got empty array', () => {
        const reverseResult = utils.reverseArray([]);
        expect(reverseResult.length).toEqual(0);
    });

    test('should got 15', () => {
        const sum = utils.summation(1, 2, 3, 4, 5);
        expect(sum).toEqual(15);
    });

    test('should got 0 - with 0 single argument', () => {
        const sum = utils.summation(0);
        expect(sum).toEqual(0);
    });

    test('should got 0 - with none argument', () => {
        const sum = utils.summation();
        expect(sum).toEqual(0);
    });

    test('should got correct power of two', () => {
        const powerTwoList = utils.powerOfTwo([1, 2, 3, 4, 5]);
        expect(powerTwoList).toEqual([1, 4, 9, 16, 25]);
        expect(powerTwoList.length).toEqual(5);
    })
});
