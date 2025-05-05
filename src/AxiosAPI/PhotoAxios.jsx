import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function PhotoAxios() {
    const[tableData,settableData] =useState([]);

    useEffect(() =>{
        axios.get("https://jsonplaceholder.typicode.com/photos")
        .then((Response) =>{
            console.log(Response.data)
            settableData(Response.data)
        })
        .catch((err) => console.log(err))
    },[])
  return (
    <div>
      <table border={2} cellPadding={10} cellSpacing={0}>
        <thead>
            <tr>
                <th>Sr No</th>
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
                        <img src="{ele.thumbnailUrl}" alt="image" />
                    </tr>
                ))
            }
        </tbody>
      </table>
    </div>
  )
}
