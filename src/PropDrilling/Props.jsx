// import React from 'react'
// import ChildA from './ChildA'

// export default function Props() {
//     //  Props Drilling -one componetn to another Components data Transfer...
// { Props-Drilling -> Props -Property ->Object(data)

//      let Name = "Alice"
//   return (
//     <div>

//       <ChildA Name={Name}/>
//     </div>
//   )
// }

// Use-Context
// data,Provider,Consumer

import React, { createContext } from 'react'
import ChildA from './ChildA';

const data = createContext();
function App() {

    let Name ="Alice";
    
  return (
    <div>
        <data.Provider value={Name}>
        
      <ChildA/>
      </data.Provider>
      
    </div>
  )
}
export default App;
 export {data};

 // Array
// import React, { createContext } from 'react';
// import ChildA from './ChildA';

// const Data  = createContext();

// function Props() {
//   let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//   return (
//     <div>
//       <Data.Provider value={arr}>
//         <ChildA />
//       </Data.Provider>
//     </div>
//   );
// }

// export default Props;
// export { Data };
