'use strict'

console.clear();

let objects = [
    {
        id : 1, 
        name : 'Product 1'
    },
    {
        id : 2, 
        name : 'Product 2'
    },
    {
        id : 3, 
        name : 'Product 3'
    },
];

console.log(objects);

let str_Objects = JSON.stringify(objects);
console.log(str_Objects);

let objects_string = JSON.parse(str_Objects);
console.log(objects_string);