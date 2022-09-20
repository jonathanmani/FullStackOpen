import { useState } from "react";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistics = ({ goodStats, neutralStats, badStats, allStats }) => {
  if(allStats === 0){
    return (
      <div>
        press a button to show stats
      </div>
    )
  }
  return (
    <>
      <table>
        <tbody>
          <tr>
            <td>good</td>
            <td>{goodStats}</td>
          </tr>
          <tr>
            <td>neutral</td>
            <td>{neutralStats}</td>
          </tr>
          <tr>
            <td>bad</td>
            <td>{badStats}</td>
          </tr>
          <tr>
            <td>Total</td>
            <td>{allStats}</td>
          </tr>
          <tr>
            <td>Average</td>
            <td>{allStats / 3}</td>
          </tr>
          <tr>
            <td>Positive</td>
            <td> {goodStats / allStats} %</td>
          </tr>
        </tbody>
      </table>  
    </> 
  )
} 

const StatisticLine = ({stat, text}) => {
  return (
    <>
    <div>{text} - {stat} </div>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const goodClicks = () => {
    setGood(good + 1)
    setAll(all + 1)
  }  
  const neutralClicks = () => { 
    setNeutral(neutral + 1)
    setAll(all + 1)
  }
  const badClicks = () => { 
    setBad(bad + 1)
    setAll(all + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={goodClicks} text='good' />
      <Button handleClick={neutralClicks} text='neutral' />
      <Button handleClick={badClicks} text='bad' />

      <h1>statistics</h1>
      {/* <StatisticLine stat={good} text='good'/>
      <StatisticLine stat={neutral} text='neutral'/>
      <StatisticLine stat={bad} text='bad'/>
      <StatisticLine stat={all} text='TOTAL'/>
      <StatisticLine stat={all / 3} text='Average'/>
      <StatisticLine stat={good / all} text='Positive'/> */}
      <Statistics goodStats={good} neutralStats={neutral} badStats={bad} allStats={all} />
    </div>
  )
}
  

export default App;
