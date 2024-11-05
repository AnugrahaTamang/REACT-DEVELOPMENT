import React, { useDebugValue, useEffect, useState } from 'react'

const ExeciseOne = () => {
    const [count, setcount] = useState(0);
    useEffect(()=>{
        console.log(count)
        document.title = `value of count ${count}`
    })
  return (
    <div>
        <h1>This is the value {count}</h1>
        <button onClick={()=>setcount(count+1)}>Increment</button>
    </div>
  )
}

export default ExeciseOne