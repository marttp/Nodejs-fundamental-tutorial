const obj = {
    key: 'value'
};

const person = {
    id: 1,
    firstName: 'Matt',
    lastName: 'Marion',
    tel: '08X-XXX-XXX',
    address: 'sample address'
};

console.log(`${person.firstName} ${person.lastName}`);
console.log(`${person['tel']} ${person['address']}`);
// Tips 1 : เอา Keys ของ Object นั้นมาทั้งหมด
console.log(Object.keys(person))
// Tips 2 : เอา Values ของ Object นั้นมาทั้งหมด
console.log(Object.values(person));
// Tips 3 : เอา [key, value] pairs ออกมาจาก Object
console.log(Object.entries(person));
// Tips 4 : Clone object และ assign key เข้าไปเพิ่มได้
const personAddedMoney = Object.assign({}, person, { money: 50 });
console.log(personAddedMoney);

console.log('===========================================');

// Tips 5 : การใช้ Object.assign หลีกเลียง pointer ชี้ไปที่ memory address เดียวกัน
let clonePerson1 = person;
let clonePerson2 = Object.assign({}, person);
clonePerson1.firstName = 'Kate'
console.log(person);
console.log(clonePerson1);
console.log(clonePerson2);

// * เนื้อหาเพิ่มเติม: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object