import React, { useState } from 'react'

export default function Serch_Shorting() {

  const employees = [
    {
      name: "John Doe",
      age: 30,
      city: "New York",
      salary: 50000,
      post: "Software Engineer"
    },
    {
      name: "Jane Smith",
      age: 28,
      city: "Los Angeles",
      salary: 55000,
      post: "Data Scientist"
    },
    {
      name: "Alice Johnson",
      age: 35,
      city: "Chicago",
      salary: 60000,
      post: "Product Manager"
    },
    {
      name: "Bob Brown",
      age: 40,
      city: "Houston",
      salary: 65000,
      post: "HR Manager"
    },
    {
      name: "Charlie Davis",
      age: 25,
      city: "San Francisco",
      salary: 70000,
      post: "UX Designer"
    },
    {
      name: "David Wilson",
      age: 38,
      city: "Boston",
      salary: 72000,
      post: "Backend Developer"
    },
    {
      name: "Eve White",
      age: 29,
      city: "Seattle",
      salary: 63000,
      post: "Marketing Specialist"
    },
    {
      name: "Frank Clark",
      age: 32,
      city: "Austin",
      salary: 68000,
      post: "Product Owner"
    },
    {
      name: "Grace Lee",
      age: 27,
      city: "Miami",
      salary: 54000,
      post: "Web Developer"
    },
    {
      name: "Henry Walker",
      age: 45,
      city: "Dallas",
      salary: 75000,
      post: "Project Manager"
    }
  ];

const [Search ,setSearch] = useState ("");
const [Sort ,setSort] = useState({
  key:"name",
  direction:"asc"
});



const FilterData = employees.filter((e) =>
  e.name.toLowerCase().includes(Search.toLowerCase()) ||
  e.age.toString().includes(Search.toLowerCase()) ||
  e.city.toLowerCase().includes(Search.toLowerCase()) ||
  e.salary.toString().includes(Search.toLowerCase()) ||
  e.post.toLowerCase().includes(Search.toLowerCase()) 
)

const HandleSort = (key) =>{
  let direction = "asc";
  if(Sort.key === key && Sort.direction === "asc") {
 direction="desc"
  }
  setSort({key,direction});
};

const StoredData = 
FilterData.sort((a,b) =>{
  if(a[Sort.key]<b[Sort.key]){
    return Sort.direction === "asc" ? 1:-1;
  };

if(a[Sort.key] > b[Sort.key]){
  return Sort.direction === "asc" ? -1:1;
}
return 0;

})

  return (

    <div>
      <input type="text"placeholder='Search By Name OR Age OR City OR Sallery OR Post' value={Search} onChange={(e) =>setSearch(e.target.value)}/>
      <br />
      <br />
      
      <table border={2} cellPadding={10} cellSpacing={0} width="100%">
        <thead>
          <tr>
            <th>Sr No</th>
            <th>
              <button onClick={() =>HandleSort("name")}>Name</button>
              </th>
            <th>
              <button onClick={() =>HandleSort("age")}>Age</button>
              </th>
            <th>
              <button onCanPlay={() => HandleSort("city")}>City</button>
              </th>
            <th>
              <button onClick={() => HandleSort("salary")}>Sallary</button>
              </th>
            <th>
              <button onClick={() => HandleSort("post")}>Post</button>
              </th>
          </tr>
        </thead>
        <tbody>
          {
            FilterData.map((ele,index) =>(
              <tr key={index}>
                <td>{index+1}</td>
                <td>{ele.name}</td>
                <td>{ele.age}</td>
                <td>{ele.city}</td>
                <td>{ele.salary}</td>
                <td>{ele.post}</td>
              </tr>

            ))}
        </tbody>
      </table>
      
    </div>
  )
}
