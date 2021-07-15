// ECMA Script = ES7
'use strict'

console.clear();

let a = "Hello world!!!";
console.log(a);

// convert number -> string
let b = 123;
console.log(b);

let c = '' + 123;
console.log(c)

let d = b.toString();
console.log(d);

// convert string -> number
let e = '1';
let f = "2.5";

let g = parseInt(e) + parseFloat(f);
console.log(g);

let h = 'I\'m a student.\nMy university is HCMUS';
console.log(h);

let i = "She is Marry. \
She is a student";
console.log(i);

//? String template
let j = 1000;
let k = "Peter";

let l = `${k} has ${j}$`;
console.log(l);

let m = "   She is Marry. She is a student    ";
console.log(m);

let n = m.trim();
console.log(n);
console.log(n.toUpperCase());
console.log(n.toLowerCase());

console.log(n[2]);
console.log("Length: ", n.length);
console.log(m.concat(" -> ", n));
console.log(m + " -> " + n);

console.log(n.indexOf('Marry'));
console.log(n.lastIndexOf('She'));

console.log(n.substring(4, 12));
console.log(n.substr(4, 10));

console.log(n.replace('Marry', 'Rose'));

console.log(n);
let o = n.split(' ');
console.log(o);

let p = n.slice(4, 6);
console.log("->", p);

let t = n.split(' ');
console.log(t);
t.splice(2, 2, "Rose");
console.log(t);

let u = t.join(' ');
console.log(u);

let v = u.split('');
console.log(v);
v.reverse();
console.log(v);
u = v.join('');
console.log(u);