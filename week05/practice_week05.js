
// Write a function filterEvenNumbers(arr) that takes an array of numbers and returns a new array with only the even numbers.

function filterEvenNumbers(arr) { 
    return arr.filter (function(num) { // ใช้ filter เพื่อ filter ข้อมูลใน array
        return num %2 === 0 // เอาเฉพาะเลขคู่
    })
}

console.log(filterEvenNumbers([1, 2, 3, 4])); // [2, 4]
console.log(filterEvenNumbers([5, 6, 7, 8])); // [6, 8]


// Write a function convertToUppercase(arr) that takes an array of 
// strings and returns a new array with all strings converted to uppercase.

function convertToUppercase(arr) { 
    let result = []; // สร้าง array result มาไว้เก็บผลลัพธ์ก่อน
    for (let i =0; i < arr.length ; i++){  // ใช้ for เพื่อวนทีละตัว
        result.push(arr[i].toUpperCase()) // วนแต่ละ index เพื่อให้เป็นตัวพิมพ์ใหญ่ และเอาผลลัพธ์ที่ได้เข้าไปใส่ใน result
    }
    return result // return ผลลัพธ์ออกมา
}

// or 

function convertToUppercase(arr) {
    return arr.map(word => word.toUpperCase()) // สามารถใช้ map เพื่อสร้าง arr ใหม่เก็บที่เป็นตัว UpperCase แล้วได้เลย
}

console.log(convertToUppercase(['hello', 'world'])); // ['HELLO', 'WORLD']
console.log(convertToUppercase(['javascript', 'is', 'fun'])); // ['JAVASCRIPT', 'IS', 'FUN']


// เรียงค่าจาก id

const stds = [
  { id: 1, name: "Tisanai", email: "tisanai@sit.kmutt.ac.th" },
  { id: 5, name: "Pornchai", email: "pornchai@sit.kmutt.ac.th" },
  { id: 2, name: "Suda", email: "suda@sit.kmutt.ac.th" },
]

const orderStds = stds.sort((a,b) => a.id - b.id) // ใช้ sort และใส่เงื่อนไขเพื่อเรียงเลข id จากมากไปน้อย
console.log(orderStds);
