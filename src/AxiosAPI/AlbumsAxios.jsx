import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function AlbumsAxios() {
    const[tableData,setTabledata] = useState([
        
    ]);

    useEffect(() =>{
        axios.get("https://jsonplaceholder.typicode.com/albums")
        .then((response) =>{
            console.log(response.data)
            setTabledata(response.data)
        })
      .catch((err) => console.log(err));
    },[])

  return (
    <div>
      <table border={2} cellPadding={10} cellSpacing={0}>
        <thead>
            <tr>
                <th>Sr No</th>
                <th>Title</th>
            </tr>
        </thead>
        <tbody>
        {
                tableData.map((ele,index) => (
                    <tr key={index}>
                        <td>{ele.id}</td>
                        <td>{ele.title}</td>
                    </tr>
                ))}
        </tbody>
      </table>
    </div>
  );
}
