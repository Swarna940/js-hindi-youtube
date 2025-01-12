/*  
Q1. TYPES OF DATATYPES
1. Primitive Datatype
-> primitive datatype are call by value , mtlab jab bhi hum esko kahi se copy karte h tab enka Orginal data/refernce address nhi diyaa jata h uska copy dete h aur hum o bhi changes karte h woh copy me hotaa ha original data me nhi hota h

-> There are 7 categories in primitive :
    1. Number - number
    e.g- const scoreValue=100

    2. String - string 
    e.g- const score="100"

    3. Boolean -boolean(true/false)
    e.g- const isLoggedIn=false

    4. Null - object
    e.g- const outsideTemp=null

    5. Undefined - undefined
    e.g- let userEmail

    6. Symbol - symbol
    e.g- 
    const id=Symbol('1234')
    const anotherId=Symbol('1234')
    console.log(id === anotherId) // false

    7. BigInt - bigint
    e.g- const bigNumber = 12345645n

->
1.Number: Represents both integer and floating-point numbers. Example: 5, 3.14.
 
2.String: Represents a sequence of characters enclosed in single or double quotes. Example: "Hello, world!".

3.Boolean: Represents a binary value, either true or false, often used for conditional logic.

4.Undefined: Represents a variable that has been declared but hasn't been assigned a value yet. Example: let x;.

5.Null:  standalone value it is represenataion of empty value it is special type and it is a object type. Example: let y = null; 

6.Symbol (ES6): it is mostly used used to find uniqnece.

7.BigInt (ES11): Represents large integers that cannot be represented by the Number type.

______________________________________________________________
2. Reference Datatype or non-primitive datatype
    1. Arrays - object
    Represents a list-like collection of values, indexed by numbers (integer indices). 
    Example: [1, 2, 3, 4].
    const num=["1", "13", "16"]

    2. Object - object
    Represents a collection of key-value pairs (properties and methods). 
    Example: { name: "John", age: 30 }.
    let myObj={
        name:"riya",
        age:22,
    }

    3. Function - function(object)
    Represents a reusable block of code that can be invoked or called with arguments. 
    Example: function add(x, y) { return x + y; }.
    const myFunction = function(){
        console.log("Hello World!");
    }

    4. Date - represent dates and times

    5. RegExp - Represents regular expressions for pattern matching


Q2. Is Js is dynamic or static type language ?
Js is a dynamically typed language because datatype will automatically assigned at the time of compilation or code execution
*/


const scoreValue=100;
const score="100"
const isLoggedIn=false

const outsideTemp=null

let userEmail;

const id=Symbol('1234')
const anotherId=Symbol('1234')
console.log(id === anotherId) // false

const bigNumber = 12345645n
// console.log(typeof BigInt) //function
// console.log(typeof BigNumber) //undefined
// console.log(typeof scoreValue) //number
// console.log(typeof score) //string
// console.log(typeof isLoggedIn) //boolean
// console.log(typeof outsideTemp) //object
// console.log(typeof userEmail) //undefined

const myFunction = function(){
    console.log("Hello World!");
}
console.log(typeof myFunction) //function(object's fubction)