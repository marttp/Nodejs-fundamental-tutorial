/**
 * Math
 */
const addValue = 10 + 20;
const minusValue = 20 - 10;
const multiplyValue = 20 * 10;
const divideValue = 20 / 10;
// Modulos การหารเอาแค่ตัวเศษ
const moduloValue = 20 % 10;

/**
 * Increment, Decrement
 */
let incrementDecrementValue = 10;
incrementDecrementValue++; // เพิ่มขึ้น 1
console.log(`incrementDecrementValue: ${incrementDecrementValue}`);
incrementDecrementValue--; // ลดลง 1
console.log(`incrementDecrementValue: ${incrementDecrementValue}`);

/**
 * Relational
 * ประกอบไปด้วย <, <=, >, >=, !==, ===
 * * ขอละ == และ != เนื่องจากไม่สามารถใช้ในการเปรียบเทียบได้แน่นอนใน ภาษา Javascript 
 */
const condition = 20 <= 10;
console.log(`Condition result: ${condition}`);

/**
 * Logical
 */
const firstCondition = 2000 === 2000;
const secondCondition = 'Hello' === 'Hi';
if (firstCondition && secondCondition) {
    console.log('Passed 2 cases');
} else if (firstCondition || secondCondition) {
    console.log('Passed some case');
} else {
    console.log('Not pass any cases');
}

// ! ยังไม่รวม Bitwise operator
