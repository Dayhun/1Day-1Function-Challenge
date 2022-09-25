//09. compute student's average score

const average = students.reduce((prev, curr) => {
    // console.log('---');
    // console.log(prev);
    // console.log(curr);
    return prev + curr.score;
}, 0);
// console.log(average / students.length);

//10. make a string containin all the scores
// result should be: '45, 80, 90, 66, 88'
// const makeString = students.map((student) => student.score).join();
// console.log(makeString);

//Q. 위 문제에서 string을 만들긴 만드는데 점수가 50점 이상인 애들로만 만들어보세요
const makeString50 = students
    .map((student) => student.score)
    .filter((score) => score >= 50)
    .join();

// console.log(makeString50);

// Q. do Q.10 sorted in asending order and make it a string
// result should be: '45, 66, 80, 88, 90'

const makeAsending = students
    .map((student) => student.score)
    .sort((a, b) => {
        return a - b;
    })
    .join();

// console.log(makeAsending);