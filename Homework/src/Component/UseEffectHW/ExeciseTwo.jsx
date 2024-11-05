import React, { useEffect, useState } from 'react'

const ExeciseTwo = () => {
    const [data, setdata] = useState([]);
    useEffect(()=>{
        async function Getdata() {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await response.json();
            setdata(data)
        }
        Getdata();
    })
  return (
    <div>
        <ul>
            {data.map((item) => {
               return <li key={item.id}>{item.userId}</li>
            })}
        </ul>
    </div>
  )
}

export default ExeciseTwo