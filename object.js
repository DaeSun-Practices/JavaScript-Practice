'use strict';
// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key : value };
// object는 key와 value의 집합체이다.
console.log("1. Literals and Properties")

const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const ellie = { name: 'ellie', age: 4 };
print(ellie);

// with JavaScript magic (dynamically typed language)
// can add properties later
// 이미 정의 된 object에 추가 가능
ellie.hasJob = true;
console.log(ellie.hasJob);

// can delete properties later
// 이미 정의 된 object에 삭제 가능
delete ellie.hasJob;
console.log(ellie.hasJob);

// 2. Computed properties
console.log("2. Computed properties")

// key should be always string
// key는 항상 string이여야 한다.
console.log(ellie.name);
console.log(ellie['name']);
//두 가지가 가능하다.

ellie['hasJob'] = true;
console.log(ellie.hasJob);

function printValue(obj, key) { // 언제 어떤 key를 받을지 모를 때 ["key"]를 쓰는 것이다.(동적이다.)
  console.log(obj[key]);
}
printValue(ellie, 'name');
printValue(ellie, 'age');

// 3. Property value shorthand
console.log("3. Property value shorthand")
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = new Person('elile', 30);
console.log(person4);

// 4. Constructor Function
console.log("4. Constructor Function")
function Person(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  // return this;
}

// 5. in operator: property existence check (key in obj)
// 해당하는 key가 object안에 있는가?
console.log("5. in operator: property existence check (key in obj)")

console.log('name' in ellie);
console.log('age' in ellie);
console.log('random' in ellie);
console.log(ellie.random);

// 6. for..in vs for..of
console.log("6. for..in vs for..of")

// for (key in obj)
for (let key in ellie) { // key를 출력
  console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 5];
for (let value of array) { // value를 출력
  console.log(value);
}

// 7. Fun cloning
console.log("7. Fun cloning")
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'ellie', age: '20' };
const user2 = user;
console.log(user);

// old way
const user3 = {};
for (let key in user) {
  user3[key] = user[key];
}
console.log(user3);

//            Object.assign(Target, Source);
const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);

// 뒤에 나올수록 값이 덮어 씌워짐
console.log(mixed.color);
console.log(mixed.size);
