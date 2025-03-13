import React, { useState } from 'react'

export default function Formobj() {
    const[obj,setObj] = useState({
        Name: "John",
        Age:25,
        City:"New York"
    
    })

   return (
    <div>
      <h1>Form Object.....</h1>
      <h3>Name:{obj.Name}</h3>
      <h3>Age:{obj.Age}</h3>
      <h3>City:{obj.City}</h3>

      {/* Spreading Operator -(...) */}

    <button onClick={() => setObj({Name:"Nitya",Age:7,City:"Kodinar"})}>Change Value..</button>
    <button onClick={() => setObj({...obj,Name:"Nitya"})}>Change Name..</button>
    <button onClick={() => setObj({...obj,City:"Kodinar"})}>Change City..</button>

    </div>
  )
}
