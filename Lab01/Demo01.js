/** 
 * * ECMA Script
 */

console.clear();
console.log("Hello world!!!");

a = 1; 
console.log("a = ", a);

// Constant
const MAX = 100;
console.log("MAX = ", MAX);

// keyword: VAR -> Global variable
var b = 88; 
console.log("b = ", b);

let c = 77;
console.log("c = ", c);

function doubleValue() {
    b = 100;
    console.log("=> b = ", b);
    
    c = 999;
    console.log("=> c = ", c);
    
    let d = 666;
    console.log("=> d = ", d);
}

doubleValue();
console.log("b = ", b);
console.log("c = ", c);
// console.log("=> d = ", d); -> d is not define