const sampleArray = [];

// Sample operation on Array
sampleArray.push(1, 2, 3, 4, 5); // Add from tail
console.log(sampleArray);
console.log('===========================================');
const popData = sampleArray.pop();
console.log(sampleArray);
console.log(popData);
console.log('===========================================');
sampleArray.unshift(6); // Add from head
console.log(sampleArray);
console.log('===========================================');
console.log(`Index of 3 : ${sampleArray.indexOf(3)}`);
console.log(`Index of 7 : ${sampleArray.indexOf(7)}`);
console.log('===========================================');
// ? ข้อควรระวัง Array ของ javascript สามารถใส่เป็น type อะไรเข้าไปก็ได้
sampleArray.push('text');
sampleArray.push({
    name: 'Bobok'
});
sampleArray.push(undefined);
sampleArray.push(null);
console.log(sampleArray);
console.log('===========================================');

// * เนื้อหาเพิ่มเติม: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
