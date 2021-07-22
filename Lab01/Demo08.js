// object literals

'use strict'

console.clear();

let a = 3; 
let a_object = {a};

console.log(`a = ${a}`);
console.log(`a_object = ${a_object}`);
console.log(`a_object.a = ${a_object.a}`);
console.log(a_object);

let b = 4; 
let b_object = { b : b};
console.log(`b_object = ${b_object}`);
console.log(b_object);

//? Method definition
let obj = {
    value : 5, 
    double() {
        return this.value * 2;
    }, 
    square : function() {
        return this.value * this.value;
    },
    triple : () => {
        return obj.value * 3;
    }
};

console.log(obj);
console.log("Value of object: ", obj.value);
console.log("Value of object called by Double method: ", obj.double());
console.log("Value of object called by Square method: ", obj.square());
console.log("Value of object called by Triple method: ", obj.triple());

let value = 100; 
let pro = {
    ['product' + value] : 'Number of product is ' + value,
    ['method_' + value](x) {
        return value + x;
    }
};

console.log(pro);
console.log(pro.method_100(200));