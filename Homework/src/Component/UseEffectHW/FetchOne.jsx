import React, { useEffect, useState } from 'react'

const FetchOne = () => {
    const [data, setdata] = useState([]);
    useEffect(()=>{
        async function GetData() {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await response.json();
            setdata(data);
        };
        GetData();
    })
  return (
    <>
        <ul>
            {data.map((item) =>{
                return <li key={Math.random()}>{item.title}</li>
            })}
        </ul>
    </>
  )
}

export default FetchOne