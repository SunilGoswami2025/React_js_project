import React, { useEffect, useState } from 'react'
import { data } from 'react-router-dom'

export default function CommentApi() {
    
  const[tableData,settableData] = useState([]);
  
  useEffect(() =>{

    fetch("https://jsonplaceholder.typicode.com/comments")
.then((response) => response.json())
.then((data) => {console.log(data) 
  settableData(data);
})
.catch((Error) => console.log(Error));
  },[]);

  return (
    <div>
      <h1>Comment Api</h1>
           {/* API- Application Programming InterFace */}
           {/* fetch().then().then().catch(Error) */}

          <table border={2} cellPadding={10} cellSpacing={0}>
<thead>
  <tr>
  <th>SR No</th>
  <th>Name</th>
  <th>Email</th>
  <th>Body</th>
  </tr>
  
</thead>
<tbody>
  {
    tableData.map((ele,index) =>(
      <tr key={index}>
        <td>{ele.id}</td>
        <td>{ele.name}</td>
        <td>{ele.email}</td>
        <td>{ele.body}</td>
      </tr>
    ))
  }
</tbody>

            </table> 
    </div>
  )
}
