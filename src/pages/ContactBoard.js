import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import '../styles/admin-board.css';
export default function ContactBoard() {
    const [users,setUsers]=useState([]);
    const {id}=useParams();
    useEffect(()=>{
        loadUsers();
    },[]);
    const loadUsers=async ()=>{
        const result=await axios.get("http://localhost:8080/api/test/contact/allcontacts");
        setUsers(result.data);
    }
    const deleteUser=async(id)=>{
      await axios.delete(`http://localhost:8080/api/test/contact/${id}`);
      loadUsers();
    }
    return (
        <div>
          <div>
            <table className='contact_table'>
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Issue</th>
                  <th scope="col">City</th>
                  <th scope="col">State</th>
                  <th scope="col">Zip Code</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
              {
                users.map((user,index)=>{
                  return(   
                  <tr>
                    <th scope="row" key={index}>{index+1}</th>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.issue}</td>
                      <td>{user.city}</td>
                      <td>{user.state}</td>
                      <td>{user.zip}</td>
                    <td>
                    <button className='btn btn-danger mx-2' onClick={()=>deleteUser(user.id)}>Delete</button>
                    </td>
                  </tr>)
                })}
              </tbody>
            </table>
          </div>
       </div>
    )
}