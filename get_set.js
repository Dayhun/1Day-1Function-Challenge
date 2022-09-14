// 클래스 get, set 키워드 조합하기 (혼공자 p.414)

class Square {
    #length;

    constructor(length) {
        this.length = length;
    }

    get length() {
        return this.#length;
    }

    get perimeter() {
        return this.#length * 4;
    }

    get area() {
        return this.#length * this.#length;
    }

    set length(length) {
        if (length <= 0) {
            throw "길이는 0보다 커야 합니다";
        }
        this.#length = length;
    }
}

// 인스턴스 생성 후 한 변의 길이, 둘레, 넓이 출력하기
const squareA = new Square(10);
console.log(`한 변의 길이: ${squareA.length}`);
console.log(`둘레: ${squareA.perimeter}`);
console.log(`넓이: ${squareA.area}`);

// 예외 발생시키기
const squareB = new Square(-10);

// 모던 자바스크립트 예제 (https://ko.javascript.info/property-accessors)
let user = {
    name: "John",
    surname: "Smith",

    get fullName() {
        return `${this.name} ${this.surname}`
    },

    set fullName(value) {
        [this.name, this.surname] = value.split(' ')
    }
};

// 주어진 값을 사용해 set fullName이 실행됩니다.
user.fullName = 'Alice Cooper';
console.log(user.name);
console.log(user.surname)