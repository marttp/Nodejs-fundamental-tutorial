const sampleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log('====== For loop : Normal ================');
for (let index = 0; index < sampleArray.length; index++) {
  const element = sampleArray[index];
  console.log(element);
}

console.log('====== While loop : While-do ================');
let i = 0;
while (i < sampleArray.length) {
  console.log(sampleArray[i]);
  i++;
}

console.log('====== Do while loop : Repeat-until ================');
do {
  i--;
  console.log(sampleArray[i]);
} while (i > 0);

// ! while, do-while ใช้ในกรณีที่เราไม่ทราบจำนวนรอบในการทำงานที่แน่นอน

console.log('====== For loop : Foreach ================');
sampleArray.forEach((value, index) => {
  console.log(`index ${index}: ${value}`);
});

console.log('====== For of : Array ================');
for (const element of sampleArray) {
  console.log(element);
}

console.log('====== Functional programming : map ================');
sampleArray.map((value, index) => {
  console.log(`index ${index}: ${value}`);
});

console.log('===========================================');
