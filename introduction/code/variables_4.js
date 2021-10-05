// var redeclaration

console.log(pi); // undefined
var pi = 3.141592;
console.log(pi); // 3.141592
var pi = "why?"; // redeclaration
console.log(pi); // why?