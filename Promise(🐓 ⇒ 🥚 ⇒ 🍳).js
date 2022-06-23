// 닭
const getHen = () => new Promise(
	(resolve, reject) => {
    setTimeout(() => resolve('🐓'), 1000);
  }
);

// 달걀
const getEgg = hen => new Promise(
	(resolve, reject) => {
    setTimeout(() => resolve(`${hen} => 🥚`), 1000);
  }
);

// 후라이 만들기
const cook = egg => new Promise(
	(resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  }
);

getHen()
	.then(hen => getEgg(hen))
	.then(egg => cook(egg))
	.then(meal => console.log(meal));

// 단순코드
// getHen() 
// .then(getEgg)
// .then(cook)
// .then(console.log);