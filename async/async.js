// async & await
// clear style of using promise :)

// 1. async
// async를 쓰면 자동으로 promise로 감싸지는 것이다.
console.log("1. async")
async function fetchUser() {
  // do network reqeust in 10 secs....
  return 'ellie';
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await ✨
console.log("2. await ✨")
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
  // await은 async안에서만 쓸 수 있다.
  // await은 뒤의 delay가 끝날 때까지 기다려준다.
  await delay(2000);       
  return '🍎';
}

async function getBanana() {
  await delay(1000);
  return '🍌';
}

async function pickFruits() {
  // async는 promise를 자동으로 감싸주고, promise는 생성과 동시에 실행됨을 기억하라!
  // 따라서 async function을 미리 생성해 놓으면 병렬적으로 실행된다.
  const applePromise = getApple();    
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 3. useful APIs ✨
console.log("3. useful APIs ✨")

// 병렬적으로 처리할 때 사용되는 API가 있다. 
function pickAllFruits() {
  // Promise.all은 Promise 배열을 전달하면 그 결과들을 모아서 배열로 전달하는 API이다.
  return Promise.all([getApple(), getBanana()]).then(fruits =>
    fruits.join(' + ')
  );
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
  // Promise.race : 가장 먼저 끝나는 Promise만 받아오기
  return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);
