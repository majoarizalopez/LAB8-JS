// Q1 //


let name = "Maria";
let age = 18;

console.log(name);
console.log(age);
//Q2 //

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