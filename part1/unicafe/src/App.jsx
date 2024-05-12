import { useState } from 'react'

const Header = ({headerText}) => {
  return (
    <h1>{headerText}</h1>
  )
}

const Statistics = ({statistics}) => {
  if (statistics.good + statistics.neutral + statistics.bad == 0)
    return (
      <p>No feedback given</p>
  )

  else return (
    <div>
      <table>
        <tbody>
          <StatisticLine text="good" value={statistics.good} />
          <StatisticLine text="neutral" value={statistics.neutral} />
          <StatisticLine text="bad" value={statistics.bad} />
          <StatisticLine text="all" value={statistics.all} />
          <StatisticLine text="average" value={statistics.average} />
          <StatisticLine text="positive" value={statistics.positive} />
        </tbody>
      </table>
    </div>
  )
}

const StatisticLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => setGood(good + 1)
  const increaseNeutral = () => setNeutral(neutral + 1)
  const increaseBad = () => setBad(bad + 1)

  let all = good+neutral+bad
  let average = (good-bad)/all
  let positive = good/all*100 + ' %'

  const statistics = {
    good: good,
    neutral: neutral,
    bad: bad,
    all: all,
    average: average,
    positive: positive
  }

  return (
    <div>
      <Header headerText={'give feedback'}/>
      <Button
        onClick={increaseGood}
        text={'good'}
      />
      <Button
        onClick={increaseNeutral}
        text={'neutral'}
      />
      <Button
        onClick={increaseBad}
        text={'bad'}
      />
      <Header headerText={'statistics'}/>
      <Statistics statistics={statistics}/>
    </div>
  )
}

export default App