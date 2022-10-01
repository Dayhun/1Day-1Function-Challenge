// 8이 포함되어 있는 숫자의 갯수를 카운팅하는 것이 아니라
// 8이라는 숫자를 모두 카운팅 해야 한다

Array(100).fill(1).map((value, index) => value + index);

//문자열로 바꾸기
Array(100).fill(1).map((value, index) => value + index) + '';
(Array(100).fill(1).map((value, index) => value + index) + '').split('8');
(Array(100).fill(1).map((value, index) => value + index) + '').split('8').length - 1;
(Array(10000).fill(1).map((value, index) => value + index) + '').split('8').length - 1;