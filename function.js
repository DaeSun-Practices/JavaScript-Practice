'use strict'; 
// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) { body... return; }
// 하나의 함수는 하나의 일만 한다.
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS
// function은 object로 간주된다.

console.log("1. Function declaration")
function printHello() {
  console.log('Hello');
}
printHello();

function log(message) {
  console.log(message);
}
log('Hello@');
log(1234);

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
console.log("2. Parameters")

function changeName(obj) {
  obj.name = 'coder';
}
const ellie = { name: 'ellie' };
changeName(ellie);
console.log(ellie);

// 3. Default parameters (added in ES6)
console.log("3. Default parameters (added in ES6)")

function showMessage(message, from = 'unknown') {
  console.log(`${message} by ${from}`);
}
showMessage('Hi!');

// 4. Rest parameters (added in ES6)
console.log("4. Rest parameters (added in ES6)")
function printAll(...args) { // ...은 배열로 parameter를 받는 방식이다.
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  for (const arg of args) {
    console.log(arg);
  }

  args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'ellie');

// 5. Local scope
console.log("5. Local scope")

let globalMessage = 'global'; // global variable

function printMessage() {
  let message = 'hello'; // local variable
  console.log(message); 
  console.log(globalMessage);

  //function에 function을 넣는 것이 가능하다.
  // 밖에서는 안이 보이지 않고, 안에서만 밖이 보인다.
  function printAnother() {  
    console.log(message);
    let childMessage = 'hello';
  }
  // console.log(childMessage); //error
}
printMessage();

// 6. Return a value
console.log("6. Return a value")
function sum(a, b) {
  return a + b;

  //return type이 없는 함수들은 사실 undefined를 return한다.
}
const result = sum(1, 2); // 3
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
// 빨랑 빨랑 return, exit 해버리는 것이 좋다.
console.log("7. Early return, early exit")
// bad
function upgradeUser(user) {
  if (user.point > 10) {
    // long upgrade logic...
  }
}

// good
function upgradeUser(user) {
  if (user.point <= 10) {
    return;
  }
  // long upgrade logic...
}

// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function
// function은 다른 변수처럼, 저장, parameter로 전달, return이 다 가능하다.
console.log("First-class function")

// 1. Function expression
// a function declaration can be called earlier than it is defiend. (hoisted)
// a function expression is created when the execution reaches it.

console.log("1. Function expression") 
// 함수의 선언과 동시에 어떤 변수에 할당
// 이름 없이 필요한 부분만 function으로 만듦 -> 이를 anonymous function이라고 한다.
const print = function () { 
  // anonymous function
  console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;        //사실 function은 hoisting이 된다.
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
console.log("2. Callback function using function expression")

function randomQuiz(answer, printYes, printNo) { //function을 parameter로 넘김 : callback function이라고 부름
  if (answer === 'love you') {
    printYes(); // callback function
  } else {
    printNo();  // callback function
  }
}
// anonymous function
const printYes = function () {
  console.log('yes!');
};

// named function
// better debugging in debugger's stack traces
// recursions
// 이름이 있으면 named function
const printNo = function print() {
  console.log('no!');
  // print(); -> recursive
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
// always anonymous
// const simplePrint = function () {
//   console.log('simplePrint!');
// };

console.log("Arrow function")

const simplePrint = () => console.log('simplePrint!');
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
  // do something more
  return a * b;
};

// IIFE: Immediately Invoked Function Expression
// 함수를 선언 후 바로 실행 
// ()로 함수를 감싼 다름에 ();으로 실행
(function hello() {
  console.log('IIFE');
})();

// Fun quiz time❤️
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder

function calculate(command, a, b) {
  switch (command) {
    case 'add':
      return a + b;
    case 'substract':
      return a - b;
    case 'divide':
      return a / b;
    case 'multiply':
      return a * b;
    case 'remainder':
      return a % b;
    default:
      throw Error('unkonwn command');
  }
}
console.log(calculate('add', 2, 3));
