// 4로 나누어 떨어지고 100으로 나누어 떨어지지 않거나, 400으로 나누어 떨어지는 해가 윤년이다.

function isLeapyear(year) {
    return (year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)
}

console.log(`2020년은 윤년인가요? : ${isLeapyear(2020)}`);