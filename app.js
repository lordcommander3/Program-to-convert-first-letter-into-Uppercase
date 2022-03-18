var string=prompt("Enter your text here");
var first = string.charAt(0);
var rem = string.slice(1);
console.log(string);
console.log(first);
console.log(first.toUpperCase());
var caps= first.toUpperCase() + rem;
console.log(`Final Result is : ${caps}`);