const accountId=144553
let accountEmail="riya123@google.com"
var accountPassword="1306"
accountCity="Jaipur"
let accountState;

// accountId=2 -> we can't change the accountId, not allowed
// variable can be declared in two ways --> let or var but we generally don't use var

accountEmail="abcf.gmail.com"
accountPassword="5678"
accountCity="Pune"

console.log(accountId);

/*
Prefered not to use var -- because of issues in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])