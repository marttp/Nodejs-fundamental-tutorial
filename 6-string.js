const text = 'Hello everyone. Today, I wanna teach you about how to handle string type in Node.js';
console.log('=========  Length  =========');

console.log('=========  To Lowercase  =========');
console.log(text.toLowerCase());
console.log('=========  To Uppercase  =========');
console.log(text.toUpperCase());

const textSplit = text.split(' ');
console.log('=========  Split string  =========');
console.log(textSplit);


const sampleText = '  Hi, There.    ';
console.log(sampleText);
console.log(sampleText.trim());



// Exercise
// Giving you a list of Firstname of students. Get the persons who start name with your input
const students = ['Marry', 'Malone', 'David', 'Alcasa', 'Matt', 'Karl', 'Lione', 'Harry', 'Thomas', 'Steve', 'James'];
const findPersonByFirstCharacter = (students = [], character = '') => {
    const nameList = [];
    if (!character) {
        return nameList;
    }
    students.forEach(name => {
        if (`${name}`.charAt(0) == character) {
            nameList.push(name);
        }
    });
    return nameList;
}

const studentList = findPersonByFirstCharacter(students, 'M');
console.log(studentList);

// * เนื้อหาเพิ่มเติม: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String