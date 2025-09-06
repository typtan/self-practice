// reverse
const array10 = ['one', 'two', 'three']
console.log('array10:', array10) // ["one", "two", "three"]

const reversed = array10.reverse()
console.log('reversed:', reversed) // ["three", "two", "one"]

// sort

// เรียงตามตัวอักษร
const months2 = ['March', 'jan', 'feb', 'Dec']
months2.sort()
console.log(`months2: ${months2}`)
// expected output: Array [Dec,March,feb,jan]

// เรียงตามตัวเลขแรก
const array14 = [1, 30, 4, 21, 100000]
array14.sort()
console.log(`array14: ${array14}`)
// expected output: Array [1, 100000, 21, 30, 4]

// เรียงตามค่า
const array = [1, 30, 4, 21, 100000]
array.sort((a,b) => a-b)
console.log(`array: ${array}`)
// expected output: Array 1,4,21,30,100000

const stds = [
  { id: 1, name: "Tisanai", email: "tisanai@sit.kmutt.ac.th" },
  { id: 5, name: "Pornchai", email: "pornchai@sit.kmutt.ac.th" },
  { id: 2, name: "Suda", email: "suda@sit.kmutt.ac.th" },
]

const orderStds = stds.sort((a,b) => a.name.localeCompare(b.name))
console.log(orderStds);
