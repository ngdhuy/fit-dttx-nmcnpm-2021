'use strict'

console.clear(); 

let objects = [
    1, 
    {
        item : 1, 
        value : 100.25
    },
    'Hello'
];

console.log(objects);

let str = JSON.stringify(objects);
console.log(str);

let obj = JSON.parse(str);
console.log(obj);

let value = 125.999; 
obj = JSON.parse(value);
console.log(obj);

//? Error Handling
var arr = [1, 2, 3, 4, 5];
try {
    for(let i = 0; i < arr.length; i++)
        console.log(ar[i]);
} catch (e) {
    console.log("Error message:", e.message);
} finally {
    console.log("=> Complete");
}

//? Throw Error
try {
    console.log(obj);
    
    let error_object = {
        message: "object is not define"
    }
    throw error_object;
    
} catch (e) {
    console.log(e);
}