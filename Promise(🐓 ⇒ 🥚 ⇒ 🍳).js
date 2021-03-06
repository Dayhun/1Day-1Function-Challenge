// λ­
const getHen = () => new Promise(
	(resolve, reject) => {
    setTimeout(() => resolve('π'), 1000);
  }
);

// λ¬κ±
const getEgg = hen => new Promise(
	(resolve, reject) => {
    setTimeout(() => resolve(`${hen} => π₯`), 1000);
  }
);

// νλΌμ΄ λ§λ€κΈ°
const cook = egg => new Promise(
	(resolve, reject) => {
    setTimeout(() => resolve(`${egg} => π³`), 1000);
  }
);

getHen()
	.then(hen => getEgg(hen))
	.then(egg => cook(egg))
	.then(meal => console.log(meal));

// λ¨μμ½λ
// getHen() 
// .then(getEgg)
// .then(cook)
// .then(console.log);