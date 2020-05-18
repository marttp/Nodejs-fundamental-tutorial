/**
 * Functional programming
 */

// * map : ทำงานทุกตัว และสามารถ transfrom element ได้ => Output: any[]
const numberPowerOfTwoList = [1,2,3,4,5,6].map(val => val ** 2);
console.log(numberPowerOfTwoList);

// * filter : ทำงานทุกตัว ถ้าผ่านเงือนไขเก็บเอาไว้ ไม่ผ่านให้ตัดออก => Output: any[]
const oddNumberList = [1,2,3,4,5,6,7,8,9,10].filter(val => val % 2 !== 0);
console.log(oddNumberList);

// * reduce : วนไปทำงานทุกตัว เข้าไปทำงานตามฟังก์ชันทีกำหนด ผลลัพธ์ที่ได้ออกมา เป็นผลรวม / ผลลัพธ์ที่เรากำหนด
const employees = [
    {
        name: 'Koko',
        dep: 'fin',
        salary: 20000
    },
    {
        name: 'Peter',
        dep: 'acc',
        salary: 25000
    },
    {
        name: 'Angela',
        dep: 'fin',
        salary: 23000
    },
];

const groupContainSumSalary = employees.reduce((prev, curr) => {
    return {
        ...prev,
        [curr.dep]: prev[curr.dep] ? prev[curr.dep] + curr.salary : curr.salary
    }
}, {});
console.log(groupContainSumSalary);


// * function chaining