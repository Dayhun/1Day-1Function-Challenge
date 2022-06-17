//숫자에 3,6,9가 포함되어있는만큼 박수
function 삼육구(number) {
    let nums = number.toString().split('');
    let clap = [];

    for (num of nums) {
        if (num == 3 || num == 6 || num == 9) {
            clap.push('짝👏');
        }
        return clap;
    }
}

console.log(삼육구(3));
console.log(삼육구(5));
