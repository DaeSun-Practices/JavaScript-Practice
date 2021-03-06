'use strict';

// Array🎉

// 1. Declaration
console.log("1. Declaration")
const arr1 = new Array();
const arr2 = [1, 2];
console.log(arr2);

// 2. Index position
console.log("2. Index position")
const fruits = ['🍎', '🍌'];
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
fruits.push('🍓', '🍑');
console.log(fruits);

// pop: remove an item from the end
console.log("pop")
const poped = fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the benigging
console.log("unshift")
fruits.unshift('🍓', '🍋');
console.log(fruits);

// shift: remove an item from the benigging
console.log("shift")
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// shift는 시간이 너무 오래 걸린다. -> 쓰지 말아라
// splice: remove an item by index position

console.log("push")
fruits.push('🍓', '🍑', '🍋');
console.log(fruits);

console.log("splice")
//     splice(index, 지울 개수)
fruits.splice(1, 1);
console.log(fruits);

console.log("splice")
//     splice(index, 지울 개수, 추가할 data들)
fruits.splice(1, 0, '🍏', '🍉');
console.log(fruits);

// combine two arrays
console.log("concat")
const fruits2 = ['🍐', '🥥'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
console.log("5. Searching")

// indexOf: find the index
// index 알려줘
console.log("indexOf")
console.log(fruits);
console.log(fruits.indexOf('🍎'));
console.log(fruits.indexOf('🍉'));
console.log(fruits.indexOf('🥥')); // 없으면 -1 출력

// includes
// 배열 안에 있는지 없는지.
console.log("includes")
console.log(fruits.includes('🍉'));
console.log(fruits.includes('🥥'));

// lastIndexOf
// 맨 마지막에 있는 값의 index를 출력
console.log("lastIndexOf")
fruits.push('🍎');
console.log(fruits);
console.log(fruits.indexOf('🍎'));
console.log(fruits.lastIndexOf('🍎'));
console.log(fruits.lastIndexOf('🥥'));
