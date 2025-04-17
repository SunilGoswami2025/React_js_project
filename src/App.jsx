import React,{ useState } from "react";
import "./App.css";

// import NavbarRouting from "./Navbar_Routing/NavbarRouting";
// import Home from "./Navbar_Routing/Home";
// import About from "./Navbar_Routing/About";
// import Services from "./Navbar_Routing/Services";
// import Blog from "./Navbar_Routing/Blog";
// import Contact from "./Navbar_Routing/Contact";
// import SingleState from "./Components/SingleState";
// import OBjectState from "./Components/OBjectState";
// import MultipleFile from "./Components/MultipleFile";
// import MultipleField from "./Components/MultipleField";
// import Comment from "./Components/Comment";
// import Tableimage from "./Components/Tableimage";
//  import USer_form from "./Components/USer_form";
// import Class from "./assets/LifeCycle of React Components/Class";
// import ObjArrForm from "./Components/ObjArrForm";
// import ObjectForm from "./Components/ObjectForm";
// import Formfunction from "./Components/Formfunction";
// import Formclass from "./Components/Formclass";
// import Counterclass from "./Components/Counterclass";
// import CounterFunction from "./Components/CounterFunction";
// import './App.css'
//  import Arr from "./Components/Arr";
// import Student_Data from "./Components/Student_Data";
// import Table from "./Components/table";
// import Home from "./Components/Home";
//  import Navbar from "./Components/Navbar";
// import Datashow from "./Components/Datashow";

// Bootstrap Link

// import NavbarBootstrap from "./Bootstrap/NavbarBootstrap";
// import "bootstrap/dist/css/bootstrap.min.css"
// import "bootstrap/dist/js/bootstrap.bundle.min.js"
// import { Route,Routes } from "react-router-dom";
// import Slider from "./Bootstrap/Slider";
// import NavbarRouter from "./Bootstrap/Router_Navigatating/NavbarRouter";
// import NavbarReact from "./Bootstrap/NavbarReact";

// Navigation Link

//  import NavbarNavigations from "./Navigations/NavbarNavigations";
//  import HomeNavigaton from "./Navigations/HomeNavigaton";
//  import AboutNavigation from "./Navigations/AboutNavigation";
//  import DatashowNavigation from "./Navigations/DatashowNavigation";
//  import Form1 from "./Navigations/Form1";
 
// LocalStorage Project

// import SingleImage from "./assets/Navigation_project/SingleImage";
// import MultipleImage from "./assets/Navigation_project/MultipleImage";

// Navigation Project

// import { Route, Routes } from "react-router-dom";
// import SingleImage from "./Navigation_project/SingleImage";
// import SingleImageDataShow from "./Navigation_project/SingleImageDataShow";
// import Multiple1 from "./Navigation_project/Multiple1";
// import MultipleDataShow from "./Navigation_project/MultipleDataShow";


//Search % Shorting
import { Route ,Routes } from "react-router-dom";
import Serch_Shorting from "./Search_shorting/Serch_Shorting";


// PropsLink

// import Props from "./PropDrilling/Props";
// import { Route } from "react-router-dom";


function App() {
//   let name="alice";
//   let age=50;
//    let arry=[1,2,3,4,5,6,7,8,9,10]

//   let students_data ={
//     student_name: "Alex Johnson",
//     age: 16,
//     grade: 10,
//     school:"samarth international school",
//     gpa: 9.0,
//     marks:{
//       science:90,
//       english:90,
//       maths:90,
//       sanskrit:90
//     }
//   };
//   const myArray= [
//     {
//         id:1,
//         name: "Alex Johnson",
//         age: 16,
//         grade: 10,
        
//     },
//     {
//       id:2,
//         name: "Priya Sharma",
//         age: 17,
//         grade: 11,

//     },
//     {
//         id:3,
//         name: "Michael Lee",
//         age: 15,
//         grade: 9,

//     },
//     {
//       id:3,
//         name: "Sofia Garcia",
//         age: 18,
//         grade: 12,
        
//     },
//     {
//       id:4,
//         name: "David Kim",
//         age: 16,
//         grade: 10,
        
//     }
// ];

// console.log(myArray);
return (
    <>
    {/* {arry} */}
     {/* {name} */}
      {/* <Datashow /> */}
     {/* <Table /> */}
     {/* <Home data={name} data1={age}/> */}
    {/* <Student_Data data={students_data}/> */}
     {/* <Arr data={arry} data1={myArray}/> */}
     {/* <Navbar/> */}
     {/* <CounterFunction /> */}
     {/* <Counterclass/> */}
     {/* <Formclass/> */}
     {/* <Formfunction/> */}
     {/* <ObjectForm/> */}
     {/* <ObjArrForm/> */}
     {/* <Class/> */}
     {/* <USer_form/> */}
     {/* <Tableimage/> */}
      {/* <Comment/>  */}
      {/* <MultipleField/> */}
      {/* <MultipleFile/> */}
      {/* <NavbarBootstrap/> */}
      {/* <NavbarReact/> */}
      {/* <NavbarRouter/> */}
      {/* <OBjectState/> */}
      {/* <SingleState/> */}
      {/* <NavbarRouting/> */}
      {/* <HomeNavigation/>
      <AboutNavigation/> */}
      {/* <NavbarNavigations/> */}
      {/* <SingleImage/> */}
      {/* <MultipleImage/> */}
      
      {/* <Props/> */}

      
      {/* <Slider/> */}
      
    
      <Routes>
        {/* <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/contact" element={<Contact/>}/> */}
        {/* <Route path="/HomeNavigation" element={<HomeNavigaton/>}/>
        <Route path="/AboutNavigation" element={<AboutNavigation/>}/>
        <Route path="/DatashowNavigation" element={<DatashowNavigation/>}/>
        <Route path="/Form1" element={<Form1/>}/> */}
        {/* <Route path="/" element={<SingleImage/>}/> */}
        {/* <Route path="SingleImageDataShow" element={<SingleImageDataShow/>}/> */}
       <Route path="/" element={<Serch_Shorting/>}/>
       {/* <Route path="/" element={<Multiple1/>}/> */}
       {/* <Route path="/MultipleDataShow" element={<MultipleDataShow/>}/> */}

    </Routes> 

     </>   
  
  )
}
export default App;
