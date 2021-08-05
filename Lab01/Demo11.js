'use strict'

console.clear();

let a = [1, 2, 5, 4, 3];
console.log(a);

for(let i = 0; i < a.length; i++)
    console.log(a[i]);

a.forEach((item) => {
    if(item % 2 == 0)
        console.log("Item: ", item);
})

a.reverse();
console.log(a);

a.sort();
console.log(a);

//? STACK ~ Add or Remote (TAIL)
a.push(88);
console.log(a);

let number = a.pop();
console.log("number = ", number);
console.log(a);

//? QUEUE ~ Add or Remote (HEAD)
a.unshift(99, 88, 77);
console.log(a);

number = a.shift();
console.log("number = ", number);
console.log(a);

//? Add or Remove (Middle)
a.shift();
a.shift();
console.log(a);

let b = a.splice(2, 2);
console.log(`b = ${b} and array = `, a);

console.log(a);
a.splice(2, 0, 3, 4);
console.log(a);

//? extract sub-array
let c = a.slice(2, 4);
console.log(c);
console.log(a);

//? MAP
a.map((element, index) => {
    console.log(element, "at", index);
})

let arrSub = a.filter((element) => {
    return (element % 2 != 0);
})
console.log(arrSub);

//? REDUCE
arrSub = a.reduce((result, element) => {
    return result + element;
})
console.log(arrSub);

//? Iterator
let str = 'abcde';
console.log(str);

let arrStr = [...str];
console.log(arrStr);

console.log(a);
let arr = [...a]
console.log(arr);
function sumTotal(...arr) {
    let result = 0;
    arr.forEach((item) => {
        console.log(item);
        result += parseInt(item);
    });
    return result;
}

console.log(sumTotal(...[1, 2, 3], 1, 3, 4));