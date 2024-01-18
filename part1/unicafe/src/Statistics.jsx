import StatisticLine from "./StatisticLine.jsx";

const Statistics = ({good, neutral, bad}) => {
    const calcAverage = () => ((good + (bad * -1)) / (good + neutral + bad)).toFixed(1)
    const calcPositive = () => ((good / (good + neutral + bad)) * 100).toFixed(1) + '%'
    const all = () => good + neutral + bad;

    if (!good && !neutral && !bad) {
        return (
        <>
            <h1>statistics</h1>
            <p>No feedback given</p>
        </>
        )
    }

    return (
        <>
            <h1>statistics</h1>

            <table>
                <tbody>
                <StatisticLine text='good' value={good}></StatisticLine>
                <StatisticLine text='neutral' value={neutral}></StatisticLine>
                <StatisticLine text='bad' value={bad}></StatisticLine>
                <StatisticLine text='all' value={all()}></StatisticLine>
                <StatisticLine text='average' value={calcAverage()}></StatisticLine>
                <StatisticLine text='positive' value={calcPositive()}></StatisticLine>
                </tbody>
            </table>

        </>
    )
}

export default Statistics;