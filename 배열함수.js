//1. make a string out of an array
const fruits = ['apple', 'banana', 'orange'];

//join API: 파라미터로 saperator를 넣을 수 있다.
const string = fruits.join();
const string = fruits.join('|');
const string = fruits.join(', and ');

console.log(string);

//2. make an array out of a string
const fruitsString = '🍎,🍏,🍊,🍓';
// split API: 무엇을 기준으로 배열을 나눌건지 구분자를 정한다(필수)
// 두번째 인자로 limit: 몇번째 인덱스까지 배열로 만들건지 정한다.
const result = fruitsString.split(',');
const result = fruitsString.split(',', 2);

console.log(result);

//3. make this array look like this: [5,4,3,2,1]
const reverse = [1, 2, 3, 4, 5];
const resultReverse = reverse.reverse();
console.log(resultReverse);
// 원본매열 자체도 변화시키는걸 알 수 있다.
console.log(reverse);

//4. make new array without the first two elements
const arraySplice = [1, 2, 3, 4, 5];
// spice API: 첫번째 파라미터는 원본배열에서 어디서부터 지울건지, 두번째는 몇개를 지울건지
const resultSplice = arraySplice.splice(0, 2);
console.log(resultSplice);
//원본배열을 지우는것임!
console.log(arraySplice);

const arraySlice = [1, 2, 3, 4, 5];
//Returns a copy of a section of an array. (카피한 섹션을 리턴한다)
//This is exclusive of the element at the index 'end' (end파라미터는 배제된다)
const resultSlice = arraySlice.slice(2, 5);
console.log(resultSlice);
//원본배열은 바뀌지 않았다
console.log(arraySlice);