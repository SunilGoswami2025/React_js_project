import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function TodosAxios() {
  const [tableData,settableData] =useState([]);

  useEffect(() =>{
    axios.get("https://jsonplaceholder.typicode.com/todos")
    .then((res) =>{
      console.log(res.data)
      settableData(res.data)
    })
    .catch((err) => console.log(err))
  },[])
  return (
    <div>
      <table border={2} cellPadding={10} cellSpacing={0}>
        <thead>
          <tr>
            <th>So</th>
            <th>Title</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {
            tableData.map((ele,index) =>(
              <tr key={index}>
                <td>{ele.id}</td>
                <td>{ele.title}</td>
                <td>{ele.completed ?"True":"False"}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
