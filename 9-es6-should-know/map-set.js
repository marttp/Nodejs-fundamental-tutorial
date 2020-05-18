// Map: เหมือน obj ใน js ธรรมดา แต่จะคุ้นเคยกับผู้ใช้งานภาษา OOP
const maps = new Map();
const employeeList = [
    { name: 'James', dep: 'Finance'},
    { name: 'Peter', dep: 'Accountant'},
    { name: 'Kola', dep: 'Accountant'}
];
employeeList.map(emp => {
    if (maps.has(emp.dep)) {
        maps.set(emp.dep, [ ...maps.get(emp.dep), emp.name])
    } else {
        maps.set(emp.dep, [emp.name])
    }
});
console.log(maps);

// Set: Store ค่าข้างในให้ไม่ซ้ำกัน
const sets = new Set();
const numbers = [1, 2, 1, 2, 3, 4, 5, 7, 4, 2, 3];
numbers.map((num) => sets.add(num));
console.log(sets);
