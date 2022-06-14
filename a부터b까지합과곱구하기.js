//a부터 b까지 합을 구하는 함수
function sumAll(a, b) {
    output = 0;
    for (let i = a; i <= b; i++) {
        output += i;
    }
    return output;
}


//a부터 b까지 곱을 구하는 함수
function multiAll(a, b) {
    output = 1;
    for (let i = a; i <= b; i++) {
        output *= 1;
    }
    return output;
}

//2부터 4까지의 합과 곱 출력하기
console.log(sumAll(2, 4));
console.log(multiAll(2, 4));


