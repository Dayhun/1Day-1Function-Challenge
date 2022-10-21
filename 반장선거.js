const array = ["원범", "원범", "혜원", "혜원", "혜원", "혜원", "유진", "유진"];

let result = {};
let winner = "";

for (let index in array) {
    let val = array[index];
    result[val] = result[val] === undefined ? 1 : result[val] + 1;
}
//{원범: undefined} -->  {원범: 1} --> {원범: 2} --> {원범: 2, 혜원: undefined} --> ....
// console.log(result);

// {원범: 2, 혜원: 4, 유진: 2}

// Object.keys 키값만 배열로 반환
winner = Object.keys(result).reduce((a, b) => {
    //console.log(a, b)
    return result[a] > result[b] ? a : b;
});

//console.log(winner);
console.log(`${winner}(이)가 총 ${result[winner]}표로 반장이 되었습니다.`);
