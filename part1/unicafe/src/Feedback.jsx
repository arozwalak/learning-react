import Button from "./Button.jsx";

const Feedback = ({ updateGood, updateNeutral, updateBad }) => {

    return (
        <>
            <h1>give feedback</h1>
            <Button label='good' onClick={updateGood}/>
            <Button label='neutral' onClick={updateNeutral}/>
            <Button label='bad' onClick={updateBad}/>
        </>
    )
}

export default Feedback
