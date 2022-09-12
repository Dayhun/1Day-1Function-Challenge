//Class생성
// let 학생1 = { name: 'Kim', age: 20 };
// let 학생2 = { name: 'Park', age: 21 };
// let 학생3 = { name: 'Lee', age: 22 };
// 하드코딩해서 3개를 만들긴 했는데 앞으로 만들일이 더 많이 생길 것 같아서 constructor를 제작하려고 합니다.

// constructor문법을 사용해서 위의 오브젝트와 똑같은 오브젝트 3개를 한번 뽑아보십시오.

// + 여기에 학생1.sayHi()라고 사용하면 "안녕 나는 Kim이야" 라는 글자가 콘솔창에 나오도록 sayHi()라는 함수도 constructor 안에 추가해보세요.


class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHi() {
        return `안녕 나는 ${String(this.name)}이야`;
    }
}

let 학생1 = new Student('Kim', 20);
let 학생2 = new Student('Park', 21);
let 학생3 = new Student('Lee', 22);
console.log(학생1);

let heo = new Student('허지현', 27);
console.log(heo.sayHi());

console.log(학생3.sayHi());