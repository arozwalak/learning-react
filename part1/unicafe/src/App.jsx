import {useState} from "react";
import Statistics from "./Statistics.jsx";
import Feedback from "./Feedback.jsx";


const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <div>
            <Feedback
                updateGood={() => setGood(good + 1)}
                updateNeutral={() => setNeutral(neutral + 1)}
                updateBad={() => setBad(bad + 1)}
            />
            <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
            />
        </div>
    )
}

export default App
