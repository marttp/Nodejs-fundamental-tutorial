/**
 * Spread operator
 */
const array = [1, 2, 3, 4, 5];
const obj = {
    timestamp: Date.now(),
    money: 20,
    name: 'Konola'
};

// Array case
const newArray = [...array, 6, 7];
console.log(newArray);
const newArray2 = [0, ...newArray];
console.log(newArray2);

// Object case
let newObject = {
    ...obj
};
console.log(newObject);
newObject = {
    ...newObject,
    money: newObject.money + 20,
    timestamp: Date.now()
};
console.log(newObject);
