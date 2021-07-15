/**
 * * Console
 */

console.clear();

var a = 1;
console.log("Value of a = ", a);

let arr = [1, 2, 3, 4, 5];
console.log(arr);

// JSON object
let obj = {
    id : 1, 
    name: "product", 
    price: 123.45
};

console.log(obj);

console.table(obj);

let arrObject = [
    {
        id : 1, 
        name : "Product 1",
        price : 123.45
    },
    {
        id : 2, 
        name : "Product 2",
        price : 78.999
    }
];

console.log(arrObject);
console.table(arrObject);

console.time('Counting...');
for(let i = 0; i < arr.length; i++)
    console.log(arr[i]);
console.timeEnd('Counting...');