import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function CommentsAxios() {

const[TableData,setTabledata] = useState([]);

 useEffect(() =>{
    axios.get("https://jsonplaceholder.typicode.com/comments")
    .then((Response) => {
        console.log (Response.data);
        setTabledata(Response.data);
    })
    .catch((err) =>console.log(err))
 },[]);


  return (
    <div>
      <table border={2} cellPadding={10} cellSpacing={0}>
        <thead>
            <tr>
                <th>Sr NO</th>
                <th>Name</th>
                <th>Email</th>
                <th>Body</th>
            </tr>
        </thead>
        <tbody>
            {
                TableData.map((ele,index) =>(
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
