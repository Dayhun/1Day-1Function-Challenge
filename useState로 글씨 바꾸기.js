import { useState } from 'react'

function Hello(props) {
    const [name, setName] = useState("태태룽")
    const [age, setAge] = useState(props.age)
    let msg = age > 19 ? "성인" : "미자"
    let color = "green"

    function changeColor() {
        color = color === "green" ? "black" : "green"
        document.querySelector('#color').textContent = color
    }

    return (
        <>
            <h1>이름을 바꿔줘</h1>
            <h3>{name} {age}세 {msg}</h3>
            <p id='color'>white</p>
            <button onClick={() => {
                setName(name === "태태룽" ? "그린티" : "태태룽")
                setAge(age + 1)
            }}>
                changeAgeName
            </button>
            <button onClick={changeColor}>changeColor</button>
        </>
    )

}

function App() {
    return (
        <Hello age={16} />
    )
}

export default App