// 배열 최솟값 구하기
function min(array) {
    let output = array[0];
    for (const item of array) {
        if (output > item) {
            output = item;
        }
    }
    return output;
}

const testarray = [35, 5, 45, 27, 30];
console.log(`${testarray}의 최솟값은 ${min(testarray)}입니다.`);