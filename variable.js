// 1. use strict
// added in ES5
'use strict'; //좀 더 엄격해짐, 그리고 좀 더 빨라짐. vanila JS에서는 꼭 선언해주자

//console.log("hello world!");

// 2. Variable
// let (added in ES6)

let global_name = "Song"; //global은 메모리 때문에 잘 안쓰는 것이 좋다.

{
    let name = 'DS';
    console.log(name);
    name = 'SD';
    console.log(name) ;
}

console.log(global_name);
console.log(name);

//var hoisting : 어디에 선언했느냐에 상관없이 항상 제일 위로 선언을 끌어올려주는 것 


//3. constants
const dayInWeek = 7;
const maxNumber = 5;
// 보안이나, 멀티쓰레딩에서 사용할 때나, 다른 개발자가 사용하거나 등등
// 여러 상황을 고려해볼때, const를 쓰는 것이 좋다.


// Variable Types
// primitive, single item : 값 자체가 memory에 저장됨
// object, box container :  reference를 저장

//4. number
const infinity = 1/0;
const negative_infinity = -1/0;
const nAn = "Not a number" / 2;
console.log(infinity);
console.log(negative_infinity);
console.log(nAn);

// 5. string
const my_name = `${global_name} Dae Sun`
const my_name_info = `value : ${global_name} Dae Sun, type : ${typeof global_name}`
console.log(my_name)
console.log(my_name_info)

// 6. Boolean
// false : 0, null, undefined, NaN, ''
// true : 나머지 전부 

// 7. null
// null은 명확히 아무것도 없음 이라고 할당하는 것이다.
let nothing  = null;
console.log(nothing)

// 8. undefined
// undefined는 아무것도 할당 되지 않았다는 의미이다.
let x;
console.log(x);

// 9. symbol
// 고유한 식별자는 부여하는데 사용
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 == symbol2);

const gsymbol1 = Symbol.for('id');
const gsymbol2 = Symbol.for('id');
console.log(gsymbol1 == gsymbol2);
console.log(`value : ${symbol1.description}, type : ${typeof symbol1}`)

// 10. Dynamic typing : dynamically typed language
// run time에서 type이 할당된 값에 따라 변경되는 것이 가능.
// 나중에 뒷통수 맞기 싫어서 type script가 개발됨

// 11. object
const DaeSun = {name : "Song Dae Sun", age : 22};
console.log(DaeSun.name)
// const가 잠그는 것은 DaeSun이라는 변수명과 object가 가지고 있는 링크일 뿐이라서, 
// object의 name, age같은 변수들을 변경하는 것은 상관없다.
DaeSun.name = "SDS" 
console.log(DaeSun.name)