'use strict'

console.clear(); 

const module_data = require('./Demo12.module.data');
const users = module_data.data.users;
console.log(users);

const f = require('./Demo12.module.func');
f.sayHello();

let s = f.sayHi('Response message');
console.log(s);

const {printObject, printUserById} = require('./Demo12.module.array')
printObject(users);
printUserById(users, 3);