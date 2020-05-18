/**
 * JSON parse, stringify
 * JSON.parse - แปลง json string เป็น json object
 * JSON.stringify - แปลง object เป็น json string
 */
const employeeList = [
    {
        name: 'Love'
    },
    {
        name: 'William'
    }
];

const response = {
    data: employeeList
}

const jsonString = JSON.stringify(employeeList);
console.log(jsonString);
console.log(typeof jsonString);

const jsonObject = JSON.parse(jsonString);
console.log(jsonObject);
console.log(typeof jsonObject);
