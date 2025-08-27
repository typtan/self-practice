// Arr method

// 1. เขียนโค้ดเพื่อสร้าง array ใหม่ ที่เป็นค่ากำลังสองของทุกตัว

const arr1 = [1,2,3,4,5]
const poweroftwo = arr1.map((arr1) => arr1**2)

console.log(poweroftwo); // [ 1, 4, 9, 16, 25 ]
console.log(arr1); // [ 1, 2, 3, 4, 5 ] Arr เดิมก็ยังคงเป็นเหมิือนเดิม ไม่เปลี่ยน เพราะเราสร้าง Arr ใหม่

// 2. เขียนโค้ดเพื่อเลือกค่าเฉพาะที่ มากกว่า 10

const arr2 = [12, 5, 8, 130, 44]
const filterArr = arr2.filter((arr2) => arr2 > 10)

console.log(filterArr); // [ 12, 130, 44 ]

// 3. ใช้ filter เพื่อเลือกเฉพาะคนที่ได้คะแนน >= 80 map และดึงชื่อคนทั้งหมดที่คะแนนมากกว่าหรือเท่ากับ 80 ออกมา

const students = [
  { id: 1, name: "hello Deejai", score: 75 },
  { id: 2, name: "สมดุ๋ย สะดุ๋ยจุ๋ย", score: 88 },
  { id: 3, name: "John Smith", score: 45 },
  { id: 4, name: "typ Wonderland", score: 92 },
]

const filterArr2 = students
        .filter((students) => students.score >= 80)
        .map((students) => students.name)
console.log(filterArr2); // [ 'สมดุ๋ย สะดุ๋ยจุ๋ย', 'typ Wonderland' ]

// 4. แทนที่ค่า โดยใช้ splice

let animals = ["dog", "cat", "rabbit"];
animals.splice(1, 1, "tiger", "lion"); // เริ่ม index 1 ลบ 1 ตัว คือ cat และแทนด้วย tiger , lion
console.log(animals); // ["dog", "tiger", "lion", "rabbit"]

