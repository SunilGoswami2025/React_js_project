// import React, { useEffect, useState } from 'react';

// export default function MultipleImage() {
//     const [input, setInput] = useState({
//         Name: "",
//         Email: "",
//         Password: "",
//         Address: "",
//         PhoneNumber: "",
//         Country: ""
//     });

//     const [files, setFiles] = useState([]);
//     const [editIndex, setEditIndex] = useState(null);
//     const [selectedImage, setSelectedImage] = useState(null); 

//     const [arr, setArr] = useState(() => {
//         const storedData = localStorage.getItem("Data");
//         return storedData ? JSON.parse(storedData) : [];
//     });

//     const handleFileChange = (e) => {
//         setFiles(Array.from(e.target.files));
//     };

//     const handleFileSubmit = (e) => {
//         e.preventDefault();
//         const { Name, Email, Password, Address, PhoneNumber, Country } = input;

//         if (Name && Email && Password && Address && PhoneNumber && Country) {
//             const imageUrls = files.length > 0 ? files.map(file => URL.createObjectURL(file)) : null;

//             if (editIndex !== null) {
//                 const updatedArr = [...arr];
//                 updatedArr[editIndex] = {
//                     ...input,
//                     files: imageUrls || arr[editIndex].files
//                 };
//                 setArr(updatedArr);
//                 setEditIndex(null);
//             } else {
//                 if (!imageUrls) {
//                     alert("Please select at least one image!");
//                     return;
//                 }
//                 setArr([...arr, { ...input, files: imageUrls }]);
//             }

//             setInput({
//                 Name: "",
//                 Email: "",
//                 Password: "",
//                 Address: "",
//                 PhoneNumber: "",
//                 Country: ""
//             });
//             setFiles([]);
//         } else {
//             alert("Enter All Valid Data...");
//         }
//     };

//     const handleEdit = (index) => {
//         const selected = arr[index];
//         setInput({ ...selected });
//         setEditIndex(index);
//         setFiles([]);
//     };

//     const handleDelete = (index) => {
//         const updatedArr = arr.filter((_, i) => i !== index);
//         setArr(updatedArr);
//     };

//     useEffect(() => {
//         localStorage.setItem("Data", JSON.stringify(arr));
//     }, [arr]);

//     return (
//         <div style={{ maxWidth: "800px", margin: "auto", padding: "30px 20px", fontFamily: "Segoe UI, sans-serif" }}>
//             <style>
//                 {`
//                     .image-scroll {
//                         scrollbar-width: none;
//                         -ms-overflow-style: none;
//                     }
//                     .image-scroll::-webkit-scrollbar {
//                         display: none;
//                     }
//                 `}
//             </style>

//             <h1 style={{ textAlign: "center", color: "#333", marginBottom: "25px" }}>
//                 {editIndex !== null ? "Update Entry" : "Card View Form"}
//             </h1>

//             <form onSubmit={handleFileSubmit} style={{
//                 display: "grid",
//                 gridTemplateColumns: "1fr",
//                 gap: "15px",
//                 padding: "25px",
//                 border: "1px solid #e0e0e0",
//                 borderRadius: "12px",
//                 backgroundColor: "#fafafa",
//                 boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
//             }}>
//                 {["Name", "Email", "Password", "Address", "PhoneNumber"].map((field, i) => (
//                     <input
//                         key={i}
//                         type={field === "Password" ? "password" : field === "PhoneNumber" ? "number" : "text"}
//                         placeholder={{field}}
//                         value={input[field]}
//                         onChange={(e) => setInput({ ...input, [field]: e.target.value })}
//                         style={{
//                             padding: "12px",
//                             borderRadius: "8px",
//                             border: "1px solid #ccc",
//                             fontSize: "15px"
//                         }}
//                     />
//                 ))}

//                 <select
//                     value={input.Country}
//                     onChange={(e) => setInput({ ...input, Country: e.target.value })}
//                     style={{
//                         padding: "12px",
//                         borderRadius: "8px",
//                         border: "1px solid #ccc",
//                         fontSize: "15px"
//                     }}>
//                     <option value="">-- Select Country --</option>
//                     <option value="India">India</option>
//                     <option value="UK">UK</option>
//                     <option value="AUS">AUS</option>
//                     <option value="China">China</option>
//                     <option value="Chicago">Chicago</option>
//                 </select>

//                 <input
//                     type="file"
//                     multiple
//                     onChange={handleFileChange}
//                     style={{ fontSize: "15px" }}
//                 />

//                 <button type="submit" style={{
//                     padding: "12px",
//                     backgroundColor: editIndex !== null ? "#ffc107" : "#007bff",
//                     color: "#fff",
//                     fontSize: "16px",
//                     border: "none",
//                     borderRadius: "8px",
//                     cursor: "pointer",
//                     transition: "0.3s"
//                 }}>
//                     {editIndex !== null ? "Update" : "Submit"}
//                 </button>
//             </form>

//             <div style={{
//                 display: "flex",
//                 flexWrap: "wrap",
//                 gap: "20px",
//                 marginTop: "40px",
//                 justifyContent: "center"
//             }}>
//                 {arr.map((ele, index) => (
//                     <div key={index} style={{
//                         width: "270px",
//                         padding: "16px",
//                         borderRadius: "12px",
//                         backgroundColor: "#ffffff",
//                         textAlign: "center",
//                         boxShadow: "0 6px 15px rgba(0,0,0,0.08)"
//                     }}>
//                         <div className="image-scroll" style={{
//                             display: "flex",
//                             gap: "10px",
//                             overflowX: "auto",
//                             marginBottom: "15px",
//                             paddingBottom: "8px",
//                             borderBottom: "1px solid #eee"
//                         }}>
//                             {ele.files?.map((url, i) => (
//                                 <img
//                                     key={i}
//                                     src={url}
//                                     alt="User"
//                                     onClick={() => setSelectedImage(url)}
//                                     style={{
//                                         width: "80px",
//                                         height: "80px",
//                                         objectFit: "cover",
//                                         borderRadius: "8px",
//                                         cursor: "pointer"
//                                     }}
//                                 />
//                             ))}
//                         </div>
//                         <h3 style={{ marginBottom: "5px" }}>{ele.Name}</h3>
//                         <p><strong>Email:</strong> {ele.Email}</p>
//                         <p><strong>Password:</strong> {ele.Password}</p>
//                         <p><strong>Address:</strong> {ele.Address}</p>
//                         <p><strong>Phone:</strong> {ele.PhoneNumber}</p>
//                         <p><strong>Country:</strong> {ele.Country}</p>

//                         <div style={{
//                             display: "flex",
//                             justifyContent: "space-between",
//                             marginTop: "12px"
//                         }}>
//                             <button onClick={() => handleEdit(index)} style={{
//                                 padding: "6px 12px",
//                                 backgroundColor: "#28a745",
//                                 color: "#fff",
//                                 border: "none",
//                                 borderRadius: "6px",
//                                 cursor: "pointer"
//                             }}>Edit</button>
//                             <button onClick={() => handleDelete(index)} style={{
//                                 padding: "6px 12px",
//                                 backgroundColor: "#dc3545",
//                                 color: "#fff",
//                                 border: "none",
//                                 borderRadius: "6px",
//                                 cursor: "pointer"
//                             }}>Delete</button>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {selectedImage && (
//                 <div
//                     onClick={() => setSelectedImage(null)}
//                     style={{
//                         position: "fixed",
//                         top: 0,
//                         left: 0,
//                         width: "100vw",
//                         height: "100vh",
//                         backgroundColor: "rgba(0,0,0,0.6)",
//                         display: "flex",
//                         alignItems: "center",
//                         justifyContent: "center",
//                         zIndex: 1000
//                     }}
//                 >
//                     <img
//                         src={selectedImage}
//                         alt="Big Preview"
//                         onClick={(e) => e.stopPropagation()}
//                         style={{
//                             maxWidth: "90%",
//                             maxHeight: "90%",
//                             borderRadius: "12px",
//                             boxShadow: "0 0 20px rgba(255,255,255,0.6)"
//                         }}
//                     />
//                 </div>
//             )}
//         </div>
//     );
// }
