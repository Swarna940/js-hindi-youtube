const name="swarn"
const last=" aabha"

// console.log(name + last + " value")

// console.log(`Hello my name is ${name} and my last name is ${last}`);

const gameName = new String('swarnaabha11')

// console.log(gameName); //[String: 'swarnaabhaa11']

// console.log(gameName[1]); //w
// console.log(gameName.__proto__); //{}

// console.log(gameName.length) //12
// console.log(gameName.toUpperCase()) //SWARNAABHAA11
// console.log(gameName.charAt(5)) // a
// console.log(gameName.indexOf('a')) // 2

// for parting the string into sub parts
// const newString = gameName.substring(0,5)
// console.log(newString);   //swarn

// const anotherString = gameName.slice(-12,4)
// console.log(anotherString);  //swar

// const anotherString = gameName.slice(-11,4)
// console.log(anotherString);  //war

const newString = "   riya  "
// console.log(newString);  //   riya  
// console.log(newString.trim());  //riya

const url = "https://hitesh.com/hitesh%20chaiandcode"
// console.log(url.replace('%20', 'choudhary-'))
 
// console.log(url.includes('chai')) //true
// console.log(url.includes('chru')) //false

const str = 'The quick brown fox jumps over the lazy dog.';
const words = str.split(' ');
console.log(words[5]); //over

const chars=str.split('')
console.log(chars[12]); //o

const strCopy=str.split('')
console.log(strCopy);



