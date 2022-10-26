// 요일 확인 함수
// 월 a, 일 b를 입력받아 무슨 요일인지 리턴하는 함수를 완성하세요.

// getDay() : 일~토 (0~6)로 표현하기 때문에 "SUN"부터 배열에 넣기
// getMonth()도 0부터 시작
const day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function checkDay(a, b) {
    const theDay = new Date(`2022-${a}-${b}`);
    console.log(day[theDay.getDay()]);
}

checkDay(a, b);
