import React, { useEffect, useState } from 'react'

const One = () => {
  const [count, setcount] = useState(0);
  useEffect(()=>{
    console.log("useEffect callback")
    document.title = `Increment ${count}`
  }, [count])
  return (
    <div>
    <h1>This is the value of {count}</h1>
    <button onClick={() => setcount(count +1)}>click me</button>
    </div>
  )
}

export default One