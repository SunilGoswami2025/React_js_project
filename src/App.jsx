import React,{ useState } from "react";
// import './App.css'
//  import Arr from "./Components/Arr";
 import Navbar from "./Components/Navbar";
// import Student_Data from "./Components/Student_Data";
// import Table from "./Components/table";
// import Home from "./Components/Home";
// import Navbar from "./Components/Navbar";
// import Datashow from "./Components/Datashow";

function App() {
  let name="alice";
  let age=50;
   let arry=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

  let students_data ={
    student_name: "Alex Johnson",
    age: 16,
    grade: 10,
    school:"samarth international school",
    gpa: 9.0,
    marks:{
      science:90,
      english:90,
      maths:90,
      sanskrit:90
    }
  };
  const myArray= [
    {
        id:1,
        name: "Alex Johnson",
        age: 16,
        grade: 10,
        
    },
    {
      id:2,
        name: "Priya Sharma",
        age: 17,
        grade: 11,

    },
    {
        id:3,
        name: "Michael Lee",
        age: 15,
        grade: 9,

    },
    {
      id:3,
        name: "Sofia Garcia",
        age: 18,
        grade: 12,
        
    },
    {
      id:4,
        name: "David Kim",
        age: 16,
        grade: 10,
        
    }
];

console.log(myArray);

 
    
  
  return (
    <>
    {/* {arry} */}
     {/* {name} */}
      
      {/* <Navbar /> */}
      {/* <Datashow /> */}
     {/* <Table /> */}
     {/* <Home data={name} data1={age}/> */}
    {/* <Student_Data data={students_data}/> */}
     {/* <Arr data={arry} data1={myArray}/> */}
     <Navbar/>
      
    </>
  )
}

export default App
