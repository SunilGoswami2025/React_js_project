import React from 'react'

export default function Student_Data({data}) {
  return (
    <div>
      <h1>hello</h1>
      <h2>Student_data Components</h2>
      <h3>Student Name:{data.student_name}</h3>
      <h3>Age:{data.age}</h3>
      <h3>Grade:{data.grade}</h3>
      <h3>School:{data.school}</h3>
      <h3>Gpa:{data.gpa}</h3>
      <h3>Science:{data.marks.science}</h3>
      <h3>English:{data.marks.english}</h3>
      <h3>Maths:{data.marks.maths}</h3>
      <h3>Sanskrit:{data.marks.sanskrit}</h3>
      

    </div>
  );
}
