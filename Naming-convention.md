# ชื่อตัวแปร - ปกติ

- ตัวแปรเป็นรูปแบบ case-sensitive: firstName != FirstName
- ชื่อตัวแปร <b>ควรจะ</b> เป็น Noun หรือ คำนาม ธรรมดา
- การประกาศตัวแปรเป็นรูปแบบ Camel-case => thisIsCamelCase (lowerCamelCase)
- กรณีที่ต้องการสร้างตัวแปร ให้สามารถเปลี่ยนค่าในระหว่าง runtime ให้ใช้ let ในการประกาศตัวแปรเท่านั้น ไม่ใช้ var เพื่อหลีกเลี่ยง Hoisting ของ var (โดยปกติ var จะตั้งค่าเริ่มต้นเป็น undefined ก่อนที่โค้ดจะถูกรัน)
- กรณีที่ต้องการสร้างตัวแปร ที่ไม่ต้องการเปลี่ยนค่าในระหว่าง runtime หรือ Reassigned ในภายหลัง ให้ใช้ const

#### example

- let bookName = 'Harry Potter';
- let itemName = 'Two-Handed Sword';

# ชื่อตัวแปร - CONSTANT ค่าคงที่

- ใช้เป็นตัวพิมพ์ใหญ่ทั้งหมด เช่น PI = 3.14159
- ถ้าหากมีความยาวมากกว่า 2 พยางค์ ให้เชื่อมพยางค์ด้วย _ (Underscore) เช่น GRAVITY_OF_EARTH = 9.8
- ให้ใข้ const ในการประกาศตัวแปร

#### example

- const PI = 3.14159;
- const GRAVITY_OF_EARTH = 9.8;

# ชื่อฟังก์ชัน

- การประกาศชื่อฟังก์ชันเป็นรูปแบบ Camel-case => thisIsCamelCase
- ชื่อ function <b>ควรจะ</b> เป็น Verb, การกระทำ

#### example

- function getUserDataById() {...}
- const getUserDataById = () => {...}

# ชื่อคลาส

- การประกาศชื่อคลาสเป็นรูปแบบ UpperCamelCase

#### example

- class Human
- class ResponseError
