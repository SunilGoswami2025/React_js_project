import React from 'react'

export default function Table() {
    const Data =[
        {
            Name:"Viddhi",
            Age:20,
            City:"Surat"
        },
        {
            Name:"Viddhi",
            Age:20,
            City:"Surat"
        },
        {
            Name:"Viddhi",
            Age:20,
            City:"Surat"
        },
        {
            Name:"Viddhi",
            Age:20,
            City:"Surat"
        },
        {
            Name:"Viddhi",
            Age:20,
            City:"Surat"
        },
    ]
  return (
    <div>
<table border={1} cellSpacing={0} width="100%" align='center'>
    <thead>
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
        
        </tr>
    </thead>
    <tbody>
        {Data.map((Data)=>(
            <tr key={Data.index} align='center'>
                <td>{Data.Name}</td>
                <td>{Data.Age}</td>
                <td>{Data.City}</td>
            </tr>
        ))}
    </tbody>
</table>

    </div>
  )
}
