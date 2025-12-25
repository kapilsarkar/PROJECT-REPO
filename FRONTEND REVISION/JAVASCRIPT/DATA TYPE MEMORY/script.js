//Data Type Memory

//Heap Memory Example

let person1 = {
    name: "Kapil",
    age: 34,
}

let person2 = person1;
person2.name = "Piku"
person1.name = "Brock"
console.log(person1.name);
console.log(person2.name);

//Stack Memory example
let a = 10;
let b = a;
b = 20;
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

//Logical Operators
let x = true;
let y = false;
console.log("Logical AND", x && y);
console.log("Logical OR", x || y);
console.log("Logical Not", !x);
console.log("Logical Not", !y);

//Practical Example of Logical Operators
let age = 34;
let userId = false;
if (age > 18 && userId) {
    console.log("You are eligible to vote");
}
else {
    console.log("You are Not eligible to Vote");
}

//For-in Loop
let person = {
    name: "Kapil",
    age: 34,
    city: "Kolkata",
};

for(let key in person){
    console.log(key + ": " +person[key]);
}

//for of Loop
let colors = ["Red", "Green", "Blue", "Yellow"];
for(let color of colors){
    console.log(color);
}

//Real example
const students =[
    {name: "Kapil", age: 34},
    {name: "Piku", age: 30},
    {name: "Brock", age: 28},   
]

for(let student of students){
    console.log(student.name + ": " + student.age);
}