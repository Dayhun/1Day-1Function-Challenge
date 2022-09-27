let total = 0;
let count = 0;
const limit = prompt("제한 몸무게를 알려주세요");
const n = prompt("친구가 몇 명인가요?");

for (let i = 0; i < n; i++) {
    total += parseInt(prompt("몸무게를 알려주세요"), 10);
    if (total <= limit) {
        count = i + 1;
    }
}

console.log(`${count}명만 입장 가능! 🏰`);