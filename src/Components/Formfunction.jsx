import React, { useState } from 'react'
export default function Formfunction() {
//  [variable,function] = useState(initialvalue)
//  const[city,setCity] = useState("Ahmedabad");

const[Name,setName] = useState("");
const[Email,setEmail] = useState("");
const[Password,setPassword] = useState(""); 

const handleform = (e) => {
  e.preventDefault();
  console.log(Name);
  console.log(Email);
  console.log(Password);
  e.target.reset();

    setName("");
    setEmail("");
    setPassword("");
};

  return (
    <div>
      <button onClick={() => setCity("Mumbai")}>ChangeCity</button>
      {/* {Name}-{Email}-{Password} */}

      <h2>FormFunction Class</h2>
      
      <form onSubmit={handleform}>
        <input type="text" placeholder='Enter Your Name:' value={Name} onChange={(e) => setName(e.target.value)}/>
        <br />
        <br />
        <input type="Email" placeholder='Enter Your Email:' value={Email} onChange={(e) => setEmail(e.target.value)}/>
        <br />
        <br />
        <input type="Password" placeholder='Enter Your Password:' value={Password} onChange={(e) => setPassword(e.target.value)}/>
        <br />
        <br />
        <button type='Submit'>Submit</button>
    </form>
    </div>
  );
}
