import Header from "./Header.jsx";
import Content from "./Content.jsx";
import Total from "./Total.jsx";
import {useState} from "react";


const App = () => {
    const [ counter, setCounter ] = useState(0)

    setTimeout(
        () => setCounter(counter + 1),
        1000
    )

    const increaseByOne = () => setCounter(counter + 1)

    const setToZero = () => setCounter(0)

    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ]
    }

    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts}/>
            <Total parts={course.parts} />
            <div>{counter}</div>
            <button onClick={increaseByOne}>Click me now!</button>
            <button onClick={setToZero}>Reset</button>
        </div>
    )
}

export default App
