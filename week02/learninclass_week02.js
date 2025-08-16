//การสรา้ง object

//1.object literal การสร้างแบบปกติ

//2.constructor function

function Book1(isbn,title){
    this.isbn=isbn
    this.title=title
}

const b1= new Book1(123,'JS')

console.log(b1);

console.log("============");

//3.class
class Book2 {
    constructor(isbn,title) {
        this.isbn=isbn
        this.title=title
    }
    getISBN(){
        return this.isbn
    }
    setTitle(){
        this.title = this.title
    }
    getBookInFo(){
        return `isbn: ${this.isbn}, title: ${this.title}`
    }
}

const myBook= new Book2(12345,"Hello world")
console.log(myBook.getISBN());
console.log(myBook.getBookInFo());
console.log(myBook);

//4. using object.create(existingObj)
const journal=Object.create(myBook)
journal.ISSN=587904

console.log(journal);
console.log(journal.ISSN);

let a1={id:1,title:"JS"}
let a2={id:1,title:"JS"}
console.log(a1==a2); // false เพราะเป็น object คนละตัวมันเลยไม่เท่ากัน
console.log(a1===a2); // false
console.log(Object.is(a1,a2)); // false

a1=a2
console.log(a1==a2); // true เพราะจับมันมาเท่ากันแล้ว
console.log(a1===a2); // true
console.log(Object.is(a1,a2)); // true


let book1={id:1,title:"JS"}
let book2={id:1,title:"JS"}

function compareBook(x,y){
    // or return x.id===y.id?true:false
    if(x.id===y.id){
        return true
    }
    else{
        return false
    }
}

console.log(compareBook(book1,book2)); // true

const keys=Object.keys(book1) // สามารถเก็บไว้ใช้ได้
const values=Object.values(book1)
console.log(keys); // [ 'id', 'title' ]
console.log(values); // [ 1, 'JS' ]


