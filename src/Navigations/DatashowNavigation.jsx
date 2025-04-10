import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function DataShow() {
  const location = useLocation();
  const navigate = useNavigate();

  const initialData = location.state;
  const [data, setData] = useState(initialData);
  const [editIndex, setEditIndex] = useState(null);
  const [editName, setEditName] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [editPass, setEditPass] = useState("");

  const handleDelete = (index) => {
    // console.log(index);
    const updatedData = data.filter((_, i) => i !== index);
    setData(updatedData);
    navigate("/datashow", { state: updatedData });
  };

  const handleEdit = (index) => {
    // console.log(index);
    setEditIndex(index);
    setEditName(data[index].name);
    setEditEmail(data[index].email);
    setEditPass(data[index].pass);
  };

  const handleSaveChanges = (e) => {
    e.preventDefault();

    const updatedData = data.map((ele, index) =>
      index === editIndex
        ? { name: editName, email: editEmail, pass: editPass }
        : ele
    );
    navigate("/datashow", { state: updatedData });
    setData(updatedData);
    setEditIndex(null);
    setEditName("");
    setEditEmail("");
    setEditPass("");
  };

  useEffect(() => {
    localStorage.setItem("DATA", JSON.stringify(data));
  }, [data]);

  return (
    <div>
      {data.length > 0 ? (
        <>
          <table border={3} cellPadding={10} cellSpacing={0}>
            <thead>
              <tr>
                <th>Sr No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Pass</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {data.map((ele, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{ele.name}</td>
                  <td>{ele.email}</td>
                  <td>{ele.pass}</td>
                  <td>
                    <button onClick={() => handleEdit(index)}>Edit</button>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        ""
      )}

      {editIndex !== null ? (
        <>
          <form onSubmit={handleSaveChanges}>
            <input
              type="text"
              placeholder="Enter Edit Name"
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
            />
            <br />
            <br />
            <input
              type="email"
              placeholder="Enter Edit Email"
              value={editEmail}
              onChange={(e) => setEditEmail(e.target.value)}
            />
            <br />
            <br />
            <input
              type="password"
              placeholder="Enter Edit Password"
              value={editPass}
              onChange={(e) => setEditPass(e.target.value)}
            />
            <br />
            <br />
            <button type="submit">Submit</button>
          </form>
        </>
      ) : (
        ""
      )}

      <h2>
        <Link to="/">Form</Link>
      </h2>
    </div>
  );
}

// let arr = [
//   { name: "Raj", age: 25, city: "Pune" },
//   { name: "ABC", age: 30, city: "Ahmedabad" }
// ];

// console.log(arr[0].name)
