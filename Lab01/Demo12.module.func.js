'use strict'

function sayHello() {
  console.log('Hello world');
}

exports.sayHello = sayHello;

exports.sayHi = (message) => {
  return `Hi, this is message '${message}'`;
}