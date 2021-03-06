'use strict';

// Arrayπ

// 1. Declaration
console.log("1. Declaration")
const arr1 = new Array();
const arr2 = [1, 2];
console.log(arr2);

// 2. Index position
console.log("2. Index position")
const fruits = ['π', 'π'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]);

// 3. Looping over an array
console.log("3. Looping over an array")

// print all fruits
// a. for
console.log("a. for")
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// b. for of
console.log("b. for of")
for (let fruit of fruits) {
  console.log(fruit);
}

// c. forEach
console.log("c. forEach")
fruits.forEach((fruit, index, array) => console.log(fruit, index, array));

// 4. Addtion, deletion, copy
console.log("4. Addtion, deletion, copy")
// push: add an item to the end
console.log("push")
fruits.push('π', 'π');
console.log(fruits);

// pop: remove an item from the end
console.log("pop")
const poped = fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the benigging
console.log("unshift")
fruits.unshift('π', 'π');
console.log(fruits);

// shift: remove an item from the benigging
console.log("shift")
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// shiftλ μκ°μ΄ λλ¬΄ μ€λ κ±Έλ¦°λ€. -> μ°μ§ λ§μλΌ
// splice: remove an item by index position

console.log("push")
fruits.push('π', 'π', 'π');
console.log(fruits);

console.log("splice")
//     splice(index, μ§μΈ κ°μ)
fruits.splice(1, 1);
console.log(fruits);

console.log("splice")
//     splice(index, μ§μΈ κ°μ, μΆκ°ν  dataλ€)
fruits.splice(1, 0, 'π', 'π');
console.log(fruits);

// combine two arrays
console.log("concat")
const fruits2 = ['π', 'π₯₯'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
console.log("5. Searching")

// indexOf: find the index
// index μλ €μ€
console.log("indexOf")
console.log(fruits);
console.log(fruits.indexOf('π'));
console.log(fruits.indexOf('π'));
console.log(fruits.indexOf('π₯₯')); // μμΌλ©΄ -1 μΆλ ₯

// includes
// λ°°μ΄ μμ μλμ§ μλμ§.
console.log("includes")
console.log(fruits.includes('π'));
console.log(fruits.includes('π₯₯'));

// lastIndexOf
// λ§¨ λ§μ§λ§μ μλ κ°μ indexλ₯Ό μΆλ ₯
console.log("lastIndexOf")
fruits.push('π');
console.log(fruits);
console.log(fruits.indexOf('π'));
console.log(fruits.lastIndexOf('π'));
console.log(fruits.lastIndexOf('π₯₯'));
