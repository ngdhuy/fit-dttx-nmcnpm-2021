// define function

'use strict'

console.clear();

function Sum(a, b) {
    return a + b;
}

console.log(Sum(1, 2));
console.log(Sum(1, '2'));

function Swap(a, b) {
    let temp = a; 
    a = b; 
    b = temp;
    return [a, b];
}

let a = 5;
let b = 4;

console.log(`a = ${a} - b = ${b}`);
Swap(a, b);
console.log(`a = ${a} - b = ${b}`);


function Swap_2(a, b) {
    return [b, a];
}

let c = 5;
let d = 4;
console.log(c, ' - ', d);
console.log(Swap(c, d));
[c, d] = Swap_2(c, d);
console.log(c, ' - ', d);

function power_1(a) { return a * a; }

console.log(power_1(2));

// Anonymous function
const power_2 = function (a) { return a * a; }
console.log(power_2(5));

// Arrow function
const power_3 = (a) => { return a * a; }
console.log(power_3(3));

const power_4 = a => a * a;
console.log(power_4(9));