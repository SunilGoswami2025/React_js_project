import axios from 'axios'
import React, { useState } from 'react'

export default function DogAxios() {
   const [img, setImg] = useState("");

 const handleClickChange =() =>{
    axios.get("https://dog.ceo/api/breeds/image/random")
    .then((res) =>{
        console.log(res.data.message);
        setImg(res.data.message)
    })
    .catch((err) => console.log(err))
 }
  return (
    <div>
        <img src={img} alt="dog_img" style={{Width: "300px"}}/>
      <button onClick={handleClickChange}>ChangeImage</button>
    </div>
  )
}
