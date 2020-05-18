let myScore = 91;
const PASS_SCORE = 70;
const MAX_SCORE = 100;

if (myScore > MAX_SCORE * 0.9) {
    console.log('You are top 10%')
}

if (myScore >= PASS_SCORE) {
    console.log('You passed!');
} else {
    console.log('You failed!');
}

console.log('===========================================');

let summaryPoint = 40;
if (summaryPoint >= 80 && summaryPoint <= 100) {
    console.log('You got grade: A');
} else if (summaryPoint >= 70 && summaryPoint < 80) {
    console.log('You got grade: B');
} else if (summaryPoint >= 60 && summaryPoint < 70) {
    console.log('You got grade: C');
} else if (summaryPoint >= 50 && summaryPoint < 60) {
    console.log('You got grade: D');
} else if (summaryPoint >= 0 && summaryPoint < 50) {
    console.log('You got grade: F');
} else {
    console.log('Point are not accepted');
}

console.log('===========================================');
let speed = 0;
let vehicle = 'train'; // car, train, plane
/**
 * 
 */
switch(vehicle) {
    case 'car':
        speed = 10;
        break;
    case 'train':
        speed = 25;
        break;
    case 'plane':
        speed = 50;
        break;
    default:
        speed = 1;
        break;
}
console.log(`Your speed: ${speed}`);

// ? ถ้าหากว่าเราไม่ใส่ break คั่นระหว่าง case จะส่งผลให้การทำงาน จะยังคงดำเนินต่อไป
console.log('===========================================');
let bookName = 'Biology';
switch(bookName) {
    case 'Biology':
        console.log('Animal, Environment, Life');
    case 'Physic':
        console.log('Force, Electrical, Quantum');
}

console.log('===========================================');
// * เราสามารถนำมาปรับใช้ได้ในกรณีที่ในเคสนั้น มีการทำงานร่วมกัน
let month = 'February';
let season = '';
switch (month) {
    case 'November':
    case 'December':
    case 'January':
    case 'February':
        season = 'Winter'
        break;
    case 'March':
    case 'April':
    case 'May':
    case 'June':
        season = 'Summer'
        break;
    case 'July':
    case 'August':
    case 'September':
    case 'October':
        season = 'Rainy'
        break;
}

console.log(`Season: ${season}`);