console.log("=========test===let==========");

let arr1 = [1,[1,2,3],"one",undefined,{ig:"typtan"}] 
// let เปลี่ยน object ได้ , const เปลี่ยน object ไม่ได้ แต่เปลี่ยนค่าข้างใน object ได้

console.log(arr1);
console.log(arr1.length);
console.log(`item one: ${arr1[0]}`)

for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}

delete arr1[1] // ลบค่าได้แต่ความยาวยังคงอยู่ จะขึ้นเป็น <1 empty item>
console.log(arr1);


console.log("=========test===const==========");

const arr2 = [1,,"one",undefined,{ig:"mortan"}] 
// arr2=[true] เปลี่ยน object ไม่ได้ TypeError: Assignment to constant variable.
console.log(arr2); // [ 1, <1 empty item>, 'one', undefined, { ig: 'mortan' } ]
arr2[0]=true // const เปลี่ยนค่าได้ [ true, <1 empty item>, 'one', undefined, { ig: 'mortan' } ]

console.log(arr2);


console.log("========test===array========");

let arr3 = [1,arr1,[1,2,3],"one",undefined,{ig:"typtan"},arr2,["hello",1,undefined]]
console.log(arr3);


// ---------------- การสร้าง Array -----------------

console.log("========create===array========");

const array1 = new Array()
console.log(array1); // []
console.log(array1.length); // 0

const array2 = new Array(10)
console.log(array2); // [ <10 empty items> ]
console.log(array2.length); // 10

const array3 = new Array(1,2,3,"morethan")
console.log(array3); // [ 1, 2, 3, 'morethan' ]
console.log(array3.length); // 4

const array4 = Array.of()
console.log(array4) // []
console.log(array4.length); // 0

const array5 = Array.of(5)
console.log(array5); // [ 5 ]
console.log(array5.length); // 1

const array6 = Array.of(1,2,7)
console.log(array6); // [ 1, 2, 7 ]
console.log(array6.length); // 3

// spread operator สามารถ Copy Array ได้

const greeting= 'hello world'

const greetingCh = [...greeting]
console.log(greetingCh); // ['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']

// .from ใช้ Copy Array ได้เหมือน spread operator

const str='hello'

let array7 = Array.from(str)
console.log(array7); // [ 'h', 'e', 'l', 'l', 'o' ]
