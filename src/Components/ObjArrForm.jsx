import React, { useState } from 'react'

export default function ArrForm() {
    const[objData,setObjData] = useState({
        Name:"",
        Email:"",
        Password:""
    });

    const[arr,setArr] = useState([]);

    const handleSubmitForm = (e) =>{
        e.preventDefault();
        console.log(objData);

        setArr([...arr,objData]);
        console.log(arr);
        setObjData({Name:"",Email:"",Password:""});
     };

     localStorage.setItem("data",JSON.stringify(arr));
  return (
    <div>
      <h1>Arr Form......</h1>
      <form onSubmit={handleSubmitForm}>
        <input type="text" placeholder='Enter Your Name:' value={objData.Name} onChange={(e) => setObjData({...objData,Name:e.target.value})}/>
        <br />
        <br />
        <input type="Email" placeholder='Enter Your Email:' value={objData.Email} onChange={(e) => setObjData({...objData,Email:e.target.value})}/>
        <br />
        <br />
        <input type="Password" placeholder='Enter YOur Password:' value={objData.Password} onChange={(e) => setObjData({...objData,Password:e.target.value})}/>
        <br />
        <br />
        <button type='submit'>Submit</button>
        <hr />
        <hr />
      </form>
      <table border={2} cellSpacing={0} width="100%">
        <thead>
            <tr>
                <th>Sr No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
            </tr>
        </thead>
        <tbody>
            {arr.map((ele,index) =>(
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>{ele.Name}</td>
                    <td>{ele.Email}</td>
                    <td>{ele.Password}</td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}
