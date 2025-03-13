import React, { useState } from 'react'

export default function CounterFunction() {
    const[count,setcount] = useState(0);

  return (
    <>
      <h1>Function Counter</h1>
      <h1>{count}</h1>
      <button onClick={()=> setcount(count+1)}>INCREMENT</button>
      <button onClick={()=> setcount(count-1)}>DECREMENT</button>
    </>

  )
}
