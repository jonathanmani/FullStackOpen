import React from 'react'

const Total = ({sums}) => {
    const total = sums.reduce((sum,part) =>
        sum + part.exercises,0)
    
  return (
    <div>
        Total: {total}
    </div>
  )
}

export default Total