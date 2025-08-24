
// test
function EvenOdd(number) {
    if (number % 2 === 0){
        return "even"
    }else {
        return "odd"
    }
}

console.log(EvenOdd(2));
console.log(EvenOdd(3));
console.log(EvenOdd(5));

console.log("========function======");

// 1.function declaration
function multiply(a,b) {
    return a*b
}
console.log(multiply(2,3));

function doSomething(x) { // x = multiply
    return x(3,5) // multiply(3,5) ถ้า return ออกมาจะเป็น function multiply
}

console.log(doSomething(multiply)); // เหมือนไปเรียก function multiply

// 2.function expression (using arrow function syntax) เขียนแบบย่อ ไม่ซัพพอร์ตการเรียก this
const multiply2 = (a,b) => a*b
console.log(multiply2(4,2));

// 3.function expression (using function declaration )
const multiply3 = function(a,b) {return a*b}
console.log(multiply3(10,2));

const x=multiply
const y=multiply2
const z=multiply3

console.log(typeof x);
console.log(typeof y);
console.log(typeof z);

if (x===multiply)
    console.log("x equals to multiply");
else {
    console.log("x not equals to multiply");
}
    

// return function

function sayGoodBye() {
    return 'Good bye'
}

function doSomething() { // เรียก sayGoodBye() 
    return sayGoodBye
}

let doIt=doSomething() // ไปเรียก doSomething()
console.log(doIt()); // Good bye

console.log(doSomething()()); // Good bye
// doSomething() [first ()] => sayGoodBye() [second ()] เรียกต่อๆกันไป


function myFunc(theObject){
    theObject.model = "A9999"
}

const product = {model: "A1001",price: 199}
console.log(product.model);

myFunc(product); // A1001
console.log(product.model); // A9999


function square(side) {
    side = 9; // ไม่ได้ share roommate เพราะ function จบก่อน theSice เลยเป็น 2
}
let theSide = 2
console.log(square(theSide)) //4
console.log(theSide) //2


function sum1(a,b,...z) {
    // return a + b
    // return arguments[0] + arguments[1]
    for (argu of arguments) {
        console.log(argu);
    }
    console.log(`lenght: ${arguments.length}`); // 2
}

sum1(1,2,4,5,6,7);


function sum(x,y,...z) {
    let count = 0
    for(argu of arguments) {
        count += argu
    }
    console.log(`sum: ${count}`);
}

sum(1,2,3,4,5)

function greeting(params) {
    
}

function greeting(greet = "Hello", whom = "Guest", quote = "How are you ?"){
    return `${greet} ${whom} ${quote}`
}
 
console.log(greeting('hi'))
console.log(greeting('Good morning','Guy','Great!'))
console.log(greeting(undefined,null,'Fine')) // null คือให้ค่าชั่วคราว เพราะรู้ว่าเดี๋ยวมีค่าให้ ส่วน undefined ไม่แน่นอน
console.log(greeting());

function sum(num1, num2, num3) {
return num1 + num2 + num3
}
let nums = [5]
//spread parameter
console.log(sum(...nums)) //40


function getFreqOfWords(sentence) {

    if (sentence == null) return undefined; // ถ้า input เข้ามาเป็น null หรือ undefined ให้ return undefined

    let words = sentence.toLowerCase().split(" "); // สร้างตัวแปร words เพื่อเก็บ sentence ที่ถูกแปลงเป็นตัวพิมพ์เล็กและแยกคำ

    let freq = {}; // สร้าง object เก็บค่า

    for (let word of words) {
        if (word in freq) {
            freq[word] += 1;
        } else {
            freq[word] = 1;
        }
    }

    return freq;
}

// test

console.log(getFreqOfWords('Today is present and present is your gift'));
// { today: 1, is: 2, present: 2, and: 1, your: 1, gift: 1 }

console.log(getFreqOfWords('Do you best just do it'));
// { do: 2, you: 1, best: 1, just: 1, it: 1 }

console.log(getFreqOfWords(null));        // undefined
console.log(getFreqOfWords(undefined));   // undefined