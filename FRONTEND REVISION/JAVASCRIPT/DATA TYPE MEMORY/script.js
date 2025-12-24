//Data Type Memory

//Heap Memory Example

let person1 = {
    name:"Kapil",
    age:34,
}

let person2 = person1;
person2.name = "Piku"
person1.name = "Brock"
console.log(person1.name);
console.log(person2.name);

//Stack Memory example
let a = 10;
let b = a;
b= 20;
console.log(a);
console.log(b);

//Data  Type conversion
//1. Number
let num = 123
let value = Number(num);
console.log(num);
console.log(typeof value);

//2. String
let str = 123
let strValue = String(str);
console.log(str);
console.log(typeof strValue);