'use strict';


// 1. 함수의 선언 & 호출
console.log("1. 함수의 선언 & 호출");

//함수 선언
function do_something(){
    console.log("hello");
}

//함수 호출
do_something();


// 2. 값을 리턴하는 함수
console.log("2. 값을 리턴하는 함수");

function add(a, b){
    const sum = a+b;
    console.log(sum);

    return sum;
}

const sum = add(1, 2);
console.log(sum);


// 3. 언어 공부방법 
//: 이것은 console로 확인


// 4. 함수를 인자로 전달
console.log("4. 함수를 인자로 전달");

function do_function(f){
    f();
}

do_function(do_something);


// 5. 선언 & 호출 복습
console.log("5. 선언 & 호출 복습");
const addFun = add;
addFun(3,4);
