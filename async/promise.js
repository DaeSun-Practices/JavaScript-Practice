'use strict';

// Promise is a JavaScript object for asynchronous operation.
// State: pending -> fulfilled or rejected
// Producer vs Consumer

// 이것만 기억하라
// 1. state가 작업을 진행 중인지 VS 작업이 완료되었는지(성공 or 실패)
// 2. Producer vs Consumer

// 1. Producer
console.log("1. Producer")
// when new Promise is created, the executor runs automatically.
// Promise는 생성과 동시에 실행된다는 것을 항상 기억하라!
//                           잘되었을 떄, 잘 안되었을 때
const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network, read files)
  // heavy한 작업은 비동기적으로 
  console.log('doing something...');
  setTimeout(() => {
    resolve('ellie');                    // 성공했을 때의 return 값
    // reject(new Error('no network'));  // 실패했을 때의 return 값
  }, 2000);
});

console.log("2. Consumers: then, catch, finally")
// 2. Consumers: then, catch, finally
promise // 
  .then(value => {      // 정상 실행
    console.log(value);
  })
  .catch(error => {     // 
    console.log(error);
  })
  .finally(() => {
    console.log('finally');
  });

// 3. Promise chaining
console.log("3. Promise chaining")
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then(num => num * 2)  // 2
  .then(num => num * 3)  // 6
  .then(num => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000); // 5
    });
  })
  .then(num => console.log(num));

// 4. Error Handling
console.log("4. Error Handling")
{
  const getHen = () =>
    new Promise((resolve, reject) => {
      setTimeout(() => resolve('🐓'), 1000);
    });
  const getEgg = hen =>
    new Promise((resolve, reject) => {
      setTimeout(() => resolve(`${hen} => 🥚`), 1000);
    });
  const cook = egg =>
    new Promise((resolve, reject) => {
      setTimeout(() => resolve(`${egg} => 🍳`), 1000);
    });

  getHen() 
    .then(hen => getEgg(hen))
    .then(egg => cook(egg))
    .then(fried_egg => console.log(fried_egg))
  
  getHen() 
    .then(getEgg)
    .then(cook)
    .then(console.log)
}
{
  const getHen = () =>
    new Promise((resolve, reject) => {
      setTimeout(() => resolve('🐓'), 1000);
    });
  const getEgg = hen =>
    new Promise((resolve, reject) => {
      setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
    });
  const cook = egg =>
    new Promise((resolve, reject) => {
      setTimeout(() => resolve(`${egg} => 🍳`), 1000);
    });

  getHen()
    .then(getEgg)
    .catch(error => {
      return '🐙';
    })
    .then(cook)
    .then(console.log)
    .catch(console.log);
}


  
