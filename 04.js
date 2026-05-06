//Data Types in JavaScript

//Primitive Data Types
//Non-Primitive Data Types

//Primitive Data Types -----------------

//Number
let num = 24;
console.log(num)

//String

let name = 'Ajit'
let fullName = "Ajit Rai";

console.log(name);
console.log(fullName);

//Boolean
let login = true;
console.log(login);

//undefined

let age;
console.log(age);

//Null
let city = null;
console.log(city);

//BigInt
let nums = 8787878787878787878787878798989090990909090909090909090909;
console.log(nums)


//Non Primitive Data Types ---------------------

//Array

let arr = ["Ajit Rai", 24, "New Delhi", login]
console.log(arr)
console.log(typeof arr);


const employee = {
    name: "Ajit Rai",
    age: 24,
    city: "New Delhi",
    email: "ajitrai1507@gmail.com"
}

console.log(employee);

console.log(typeof employee);


function hello(){
    console.log("Hello Good Morning Ajit Rai");
}

hello();

let sayHello = ()=>{
    console.log("Say hello ajit rai again");
}

console.log(sayHello())
console.log(typeof sayHello)
