import React from 'react'

function Part({partName, exercises}) {
  return (
    <li>{partName} {exercises}</li>
  )
}

export default Part