import React from 'react'
// {props-properties(object)}
    // {one way data binding}
    // {pass data from parents to child components}
    // {datatype-string,nuber,boolein(true,false),undefined,arry,object}
export default function Home({data,data1}) {
    
  return (
    <div>
      
      <h2>home components</h2>
      <h2>{data}</h2>
      <h2>{data1}</h2>
      
    </div>
  );
}
