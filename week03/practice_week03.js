// 1. ให้ทำโจทย์ practice

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


// 2. เขียน function ง่ายๆ

function poweroftwo(number) { // เขียน function รับค่าแล้วนำมายกกำลัง 2
    return 2**number
}

console.log(poweroftwo(3)); // 8
console.log(poweroftwo(10)); // 1024
console.log(poweroftwo(2000)); // Infinity