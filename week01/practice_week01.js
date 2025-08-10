// โจทย์ที่ 1 การสร้าง Array และ loop แสดงค่า Array ว่ามีอะไรบ้าง มีกี่ตัว

let array1 = ["banana","apple","Thanyaporn",10,"oct",{id: 67130500091}]

for (let i = 0; i < array1.length; i++) {
    console.log(array1[i]);
}

console.log(array1);
console.log(array1.length);


// โจทย์การรวม array ด้วย spread operator

let arrA = [1,2,3]
let arrB = ["banana","berry","apple"]

console.log(arrA);
console.log(arrB);

let arrC = [...arrA,...arrB]

console.log(arrC);


// โจทย์การทำเมนูร้านอาหาร
/*
    1.	สร้าง array ชื่อ menu ที่มีค่า ["ผัดไทย", "ต้มยำกุ้ง", "ข้าวมันไก่"]
    2.	แสดงความยาวของ menu
    3.	แสดงเมนูแต่ละตัวด้วย for loop
    4.	เปลี่ยนเมนูตัวที่สอง (index 1) เป็น "แกงเขียวหวาน"
    5.	ลบเมนูตัวแรก (index 0) โดยใช้ delete
    6.	แสดง menu และความยาวของมันอีกครั้ง 
*/

const menuFood = ["ผัดไทย", "ต้มยำกุ้ง", "ข้าวมันไก่"]
const menuWater = ["น้ำเปล่า","Coke","นมปั่น"]

// แสดงเมนูและจำนวน

console.log("------Welcome to kfc kmutt------");
console.log("------MENU FOOD------");

for (let i = 0 ; i < menuFood.length ; i++){
    console.log(`item ${[i+1]} : ${menuFood[i]}`);
}
console.log(`total item ${menuFood.length}`);

console.log("");
console.log("------MENU WATER------");


for (let i = 0 ; i < menuWater.length ; i++){
    console.log(`item ${[i+1]} : ${menuWater[i]}`);
}
console.log(`total item ${menuWater.length}`);

// แก้ไขเมนู สามารถแก้ได้เพราะประกาศตัวแปรด้วย const

console.log("แก้ไขเมนูอาหาร");

menuFood[1] = "แกงเขียวหวาน"
console.log(menuFood);

// เพิ่มเมนูอาหาร

menuFood.push("แซลมอน");
menuFood.push("ข้าวปลาแกะ");
menuFood.push("ไข่ตุ๋น");

// ลบเมนูน้ำเมนูแรก

console.log("ลบเมนูน้ำ");
delete menuWater[0]
console.log(menuWater);


// เพิ่มเมนูน้ำในเมนูที่ 1

menuWater.push("น้ำผลไม้");
menuWater.push("น้ำเปล่า");
menuWater.push("น้ำลุงหนุ่ม");

// แก้ไขเสร็จแล้วแสดงเมนูใหม่

console.log("------Welcome to kfc kmutt------");
console.log("------MENU FOOD------");

for (let i = 0 ; i < menuFood.length ; i++){
    console.log(`item ${[i+1]} : ${menuFood[i]}`);
}
console.log(`total item ${menuFood.length}`);

console.log("");
console.log("------MENU WATER------");


for (let i = 0 ; i < menuWater.length ; i++){
    console.log(`item ${[i+1]} : ${menuWater[i]}`);
}
console.log(`total item ${menuWater.length}`);





