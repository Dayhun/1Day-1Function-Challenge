import { useState } from 'react'

function Hello(props) {
    const [name, setName] = useState("김씨");
    const [age, setAge] = useState(props.age);
    let msg = age > 19 ? "성인" : "미성년자";
    let color = "green";

    function changeColor() {
        color = color === "green" ? "black" : "green";
        document.querySelector('#color').textContent = color;
    }
    return (
        <>
            <h1>useState로 이름 바꾸기</h1>
            <h3>{name} {age}세 {msg}입니다.</h3>
            <p id='color'>white</p>
            <button onClick={() => {
                setName(name === "김씨" ? "이씨" : "김씨");
                setAge(age + 1);
            }}>이름바꾸기</button>
            <button onClick={changeColor}>색깔바꾸기</button>
        </>
    )
}

export default function App() {
    return (
        <div>
            <Hello age={16} />
        </div>
    )
}
