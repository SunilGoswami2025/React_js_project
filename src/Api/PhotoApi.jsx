import React, { useEffect, useState } from 'react'
import { data } from 'react-router-dom';

export default function PhotoApi() {
  const[tableData,settableData] = useState([]);


useEffect (() =>{

  fetch("https://jsonplaceholder.typicode.com/photos")
  .then((Response) =>Response.json())
  .then((data)=> {console.log(data)
settableData(data);
})
  .catch((Error) => console.log(Error))
  
},[])


  return (
    <div>
     <table border={2} cellPadding={10} cellSpacing={0}>
      <thead>
        <tr>
          <th>Sr NO</th>
          <th>Title</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
         {
          tableData.map((ele,index) =>(
            <tr key={index}>
               <td>{ele.id}</td>
               <td>{ele.title}</td>
               <td>
                <img src={ele.thumbnailUrl} alt="image" />
               </td>
            </tr>
          ))
         }
      </tbody>
      </table> 
    </div>
  )
}
