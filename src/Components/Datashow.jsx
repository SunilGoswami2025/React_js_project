import React from 'react'

export default function Datashow() {
    let arr = [1,2,3,4,5,6];
    let obj = {
        company:"webcraft",
        Location:"ahmedabad",
        Staff:50,
        Vacency:"Fronted Devloper"
      }
  return (
    // {variable -var(redeclair,assighn) ,let(not redeclair,reasign) ,const(not both redeclair.reassign)}
    // {react js is javascript library}
    // {datatype-string,numbr,boolean,null,undefine,obj,array}
    <>
      <ul>
        {arr.map((ele,index)=>(
            <li key={index}>{ele}</li>
        ))}
      </ul>
      <h2>{obj.company}</h2>
      <h2>{obj.Location}</h2>
      <h2>{obj.Datashow}</h2>
      <h2>{obj.Vacency}</h2>
    </>
  )
}
