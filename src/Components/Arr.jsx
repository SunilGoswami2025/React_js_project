import React from 'react'

export default function Arr({data,data1}) {
  return (
    <>
    <div>
      <ul>
        {data.map((ele,index) => (
           <li key={index}>{ele}</li> 
        ))}
      </ul>

<table border={1} cellSpacing={0} width="100%">
    <thead>
        <tr>
            <th>Sr No</th>
            <th>Name</th>
            <th>Age</th>
            <th>grade</th>
           
        </tr>
    </thead>
   <tbody>
        {data1.map((ele,index) => (
            <tr>
                <td>{ele.id}</td>
                <td>{ele.name}</td>
                <td>{ele.age}</td>
                <td>{ele.grade}</td>
            </tr>
        ))}
    </tbody>
</table>
</div>
</>
  );
}
