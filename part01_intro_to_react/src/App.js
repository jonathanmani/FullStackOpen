import { useState } from "react";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistics = ({ goodStats, neutralStats, badStats, allStats }) => {
  return (
    <>
      <div>good {goodStats}</div>
      <div>neutral {neutralStats}</div>
      <div>bad {badStats}</div>
      <div>TOTAL: {allStats} </div>
      <div>Avg:{allStats / 3} </div>
      <div>Positive: {goodStats / allStats} %</div>  
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
      <Statistics goodStats={good} neutralStats={neutral} badStats={bad} allStats={all} />
    </div>
  )
}

// const History = (props) => {  
//   if (props.allClicks.length === 0) {
//     return (      
//       <div>        
//         the app is used by pressing the buttons      
//       </div>    
//     )  
//   }  
//   return (    
//     <div>      
//       button press history: {props.allClicks.join(' ')}    
//     </div>  
//   )
// }

// const Button = ({ handleClick, text }) => (  
//   <button onClick={handleClick}>
//     {text}  
//   </button>
// )


// const App = () => {
//   const [left, setLeft] = useState(0)
//   const [right, setRight] = useState(0)
//   const [allClicks, setAll] = useState([])

//   const handleLeftClick = () => { 
//     setAll(allClicks.concat('L'))    
//     setLeft(left + 1)  
//   }

//   const handleRightClick = () => { 
//     setAll(allClicks.concat('R'))    
//     setRight(right + 1)  
//   }

//   return (
//     <div>
//       {left}
//       <Button handleClick={handleLeftClick} text='left' />
//       <Button handleClick={handleRightClick} text='right' />
//       {right}
//       <History allClicks ={allClicks} />    
//     </div>
//   )
// }
  

export default App;
