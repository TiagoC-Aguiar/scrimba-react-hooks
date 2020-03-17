import React, { useState, useEffect } from 'react'
import randomColor from 'randomcolor'

function Playground() {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState(null)

  useEffect(() => {
    setColor(randomColor())
  }, [count])

  return (
    <div style={{borderTop: `10px solid ${color}`}}>
      {count}<br/>
      <button onClick={() => setCount(count-1)} >-</button>
      <button onClick={() => setCount(count+1)}>+</button>
    </div>
  )
}

export default Playground
