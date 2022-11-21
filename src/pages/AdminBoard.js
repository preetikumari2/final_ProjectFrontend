import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import '../styles/admin-board.css';

import UserService from "../Services/user-service";

const AdminBoard = () => {
  const [users,setUsers]=useState([]);

    const {id}=useParams();

    useEffect(()=>{
        loadUsers();

    },[]);

    const loadUsers=async ()=>{
        const result=await axios.get("http://localhost:8080/api/springapi");
        setUsers(result.data);
    }

    const deleteUser=async(id)=>{
      await axios.delete(`http://localhost:8080/api/springapi/${id}`);
      loadUsers();
    }
  return (
    <div className="admin_container">
            <div className='py-4'>
            <table className="table_content table border shadow">
  <thead >
    <tr>
      <th scope="col">id</th>
      <th scope="col">Image</th>
      <th scope="col">Description</th>
      <th scope="col">Price</th>
      <th scope="col">Action</th>
      {/* <th scope="col">Add</th> */}
    </tr>
  </thead>
  <tbody>
    { 
    users.map((user,index)=>{
     return(   <tr>
      <th scope="row" key={index}>{index+1}</th>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>{user.address}</td>
      <td>
        <Link className='btn btn-primary mx-2' to={`/viewUser/${user.id}`}>View</Link>
        <Link className='btn btn-outline-primary mx-2' to={`/editUser/${user.id}`}>Edit</Link>
        <button className='btn btn-danger mx-2' onClick={()=>deleteUser(user.id)}>Delete</button>
      </td>
    </tr>)
})}
  </tbody>
</table>
    </div>
            
</div>

  );
};

export default AdminBoard;