import { useState } from "react";

const App = (props) => {
  const [counter, setCounter] = useState(0)

  const handleClick = () => {
    console.log('clicked')
    setCounter(counter + 1)
  }

  const resetCounter = () =>{
    setCounter(0)
  }

  return (
    <div>{counter}
    <button onClick={handleClick}>
      plus
    </button>
    <button onClick={resetCounter}>
      reset
    </button>
    </div>
  )
}
  

export default App;
