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
        const result=await axios.get("http://localhost:8080/api/allimages");
        setUsers(result.data);
    }

    const deleteUser=async(id)=>{
      await axios.delete(`http://localhost:8080/api/${id}`);
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
      <th scope="col">Price</th>
      {/* <th scope="col">Status</th> */}
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    { 
    users.map((user,index)=>{
     return(   
     <tr className="update_image">
      <th scope="row" key={index}>{index+1}</th>
      <td className="update_image"><img  src={user.image} alt='user image' /></td>
      
      <td>{user.price}</td>
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