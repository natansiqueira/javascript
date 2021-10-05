// var declaration with a console.log at the beginning

// there is a function wrapper around every js code in node. it's a characteristic from node js module system
// with var at the execution context mount time the interpreter grabs variables declared with var (register) and initialiaze an undefined value to them 
console.log(pi); // undefined
var pi = 3.141592;