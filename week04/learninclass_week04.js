// array method

// filter original array
const words =['mango','apple','mangosteen','orange']

// 1. annonymous arrow function 
// const shortWords = words.filter((word) => word.length <= 6)

// 2. annonymous function declaration
// const shortWords = words.filter(function(word) {
//    return word.length <= 6
//})

// 3. reuse callback function (name function)
function wordLength(word){
    return word.length <= 6
}

const shortWords = words.filter(wordLength) 
// const shortWords = words.filter(wordLength("apple")) // กลายเป็น boolean T F

console.log(words);
console.log(shortWords);

// change original array
const shortedWords = words.sort()
console.log(words);
console.log(shortWords);


// map

const uppercase = words.map((word) => word.toUpperCase()) // ทำให้ตัวหนังสือเป็นตัวใหญ่
console.log(uppercase);

const students = [
  { id: 1, name: "Somchai Jaidee" },
  { id: 2, name: "Suda Deejai" },
  { id: 3, name: "John Smith" },
]

// map filter
const stuid = students.map((students) => students.id)
const filter = stuid.filter((stuid) => stuid %2 == 0)
console.log(stuid);
console.log(filter);

// includes
const fruits = ["Mango", "apple", "mangosteen", "orange", "mangoes"]
const findapple = fruits.filter(fruits => fruits.toLowerCase().includes("apple"))

if (findapple.length > 0) {
  console.log("มีค้าบลูก");
} else {
  console.log("ไม่มีค้าบลูก");
}

const product = [1,'RED',102]
const productDetail = product.reduce((detail,prop) => {
    return prop === 'RED' ? detail?.concat('R') : detail?.concat(prop)
} , '')

console.log(productDetail);

// reduce
const cart = [
  { productId: 1001, price: 500, quantity: 2 },
  { productId: 1002, price: 10, quantity: 3 },
  { productId: 1003, price: 5, quantity: 10 },
]

const total = cart.reduce((sum, item) => {
  return sum + item.price * item.quantity;
}, 0);

console.log("Total:", total);

// cart[cart.length] = { productId: 5555, price: 1, quantity: 4 }
cart.push({ productId: 5555, price: 1, quantity: 4 })
console.log(cart)
console.log(cart.pop()) //{ productId: 5555, price: 1, quantity: 4 }
console.log(cart.length) //3


const words1 = ["Mango", "Apple", "mangosteen", "orange", "mangoes"]
words1.splice(2,1,"banana") // replace "mangosteen" with "banana"
console.log(words1)

words1.splice(3,2) // remove the last two words
console.log(words1)

words1.splice(2,0,"Melon","Cherry") // add "melon" and "cherry" after "apple"
console.log(words1)

// slice items at index 2 to last
const sliced1 = words1.slice(2);  
console.log(sliced1); // ["mangosteen", "orange", "mangoes"]

// slice the first to third items (index 0 ถึง 2)
const sliced2 = words1.slice(0, 3);
console.log(sliced2); // ["Mango", "Apple", "mangosteen"]

// fill null to all items
const filled = words1.fill(null);
console.log(filled); // [null, null, null, null, null]


let colors = ["red", "green", "blue"];
colors.splice(1, 0, "yellow", "pink");
console.log(colors); // ["red", "yellow", "pink", "green", "blue"]
// เริ่มที่ index 1, ลบ 0 ตัว, แทรก "yellow", "pink"