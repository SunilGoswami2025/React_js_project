// import React from 'react'

// export default function ChildC(Props) {
//   return (
//     <div>
        
//       <h1> {Props.Name}</h1>
//     </div>
//   )
// }

import React, { useContext } from 'react'
import {data} from 'react-router-dom'

export default function ChildC() {
let Name = useContext(data);

  return (
    <div>
      <data.Consumer>
    {/* Function */}
      {(Name) => {
          return(
            <>
            <h2>Name:{Name}</h2>
            </>
          )
        }}
      </data.Consumer>

    </div>
  )
}

// Arr 

// import React, { useContext } from 'react'
// import { Data } from './Props'

// export default function ChildC() {
//   const arr = useContext(Data)
//   return (
//     <div>
//       <Data.Consumer>
//    {(arr) =>{
//     return(
//      <>
//      <ul>
//       {arr.map((ele,index) => (
//         <li key={index}>{ele}</li>

//       ))}
      
//      </ul>
//       </>
//     )
//    }}
//       </Data.Consumer>
//     </div>
//   )
// }

