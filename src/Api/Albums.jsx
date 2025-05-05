import React, { useEffect, useState } from 'react'
import { data } from 'react-router-dom'

export default function Albums() {
    
  const[tableData,settableData] = useState([]);
  
  useEffect(() =>{

    fetch("https://jsonplaceholder.typicode.com/albums")
.then((response) => response.json())
.then((data) => {console.log(data) 
  settableData(data);
})
.catch((Error) => console.log(Error));
  },[]);

  return (
    <div>
      <h1>Albums Api</h1>
           {/* API- Application Programming InterFace */}
           {/* fetch().then().then().catch(Error) */}
{
                tableData.map((ele,index) => (
                    <tr key={index}>
                        <td>{ele.id}</td>
                        <td>{ele.title}</td>
                    </tr>
                ))}
<table border={2} cellPadding={10} cellSpacing={0}>
   <thead>
      <tr>
        <th>SR No</th>
        <th>Title</th>
     </tr>
</thead>
<tbody>
  {
    tableData.map((ele,index) =>(
      <tr key={index}>
        <td>{ele.id}</td>
        <td>{ele.title}</td>
      </tr>
    ))
  }
     </tbody>

   </table> 
 </div>
  )
}
