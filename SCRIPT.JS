// Q1 //


let name = "Maria";
let age = 18;

console.log(name);
console.log(age);
//Q2 //

// STRING //
let name1 = "Maria";

// NUMBER //

let age1 = 18

// BOOLEAN //

let isStudent = false;

// UNDEFINED //

let job;

// NULL //

let car = null;

// OBJECT // 

let person = {
    Firstname1: "Maria",
    lastName: "Ariza",
    age: 25
}; 

// ARRAY //

let colors = ["red", "green", "blue"];

console.log("String:", name1);
console.log("Number:", age);
console.log("Boolean:", isStudent);
console.log("Undefined:", job);
console.log("Null:", car);
console.log("Object:", person);
console.log("Array:", colors);

let RollNumber = 15;
if (RollNumber > 10){

console.log("The RollNumber is greater than 10");

}

//Q3//

let isMember = true;
if (isMember) {

console.log("Member discount applied");

}

//Q4//

let startValue = 50;
if (startValue > 0) {

console.log("The value is positive");

}

else if (startValue < 0){
    console.log("The value is negative");
} else {
    console.log("The value is zero");
}

//Q5//

let a = 10;
let b = 20;

console.log(a == b);
console.log(a === b);
console.log(a != b);
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);

//Q6//

let Firstname = "Maria";
let lastName = "Ariza Lopez";
let age2 = 18;

console.log("Hello, " + Firstname + " " + lastName + ", you are " + age2 + " years old ");

//Q7//

let num = 50;
if (num > 0 && num < 100){
console.log("The number is whitin range");

}

//Q8//

let hasCar = true;
let hasLiscense = true;
let hasInsurance = true;

if (hasCar && hasLiscense && hasInsurance){
    console.log("You can drive legally");
}
else {
    console.log("Check your driving eligibility");
}

//Q9//

let num2 = 21;
if (num2 % 2 === 0) {

console.log("The number is even");

} else {
    console.log("The number is odd");
}

//Q10//

let score = 85;
if (score >= 90) {
console.log("Grade A");
} else if (score >= 80 && score < 90){
    console.log("Grade B");
} else {
    console.log("Grade C");
}