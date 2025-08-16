
// การบ้าน 3. Shallow Equality
// เขียนฟังก์ชันที่ตรวจสอบว่า object นักเรียน 2 คนเหมือนกันหรือไม่ (เช็คเฉพาะค่าชั้นแรกเท่านั้น)

let student1 = {id: 101, name: "Than", major: "IT"} // กำหนดค่า

let student2 = {id: 102, name: "Poy", major: "IT"} // กำหนดค่า

let student3 = {id: 101, name: "Than", major: "IT"} // กำหนดค่า


function SameStudent(student1, student2){ // เขียน function ตรวจสอบค่า
  const keys1 = Object.keys(student1)
  const keys2 = Object.keys(student2)

  if(keys1.length !== keys2.length){ // เช็คว่าจำนวน property เท่ากันมั้ย
    return false
  }

  for(let key of keys1){ // วนเช็คค่าในแต่ละ key
    if(student1[key] !== student2[key]){
      return false
    }
  }

  return true // ถ้า return true หมดคือเป็นนักเรียนคนเดียวกัน
}

console.log(SameStudent(student1, student2)) // false
console.log(SameStudent(student1, student3)) // true
console.log(SameStudent(student2, student3)) // false