import axios from "axios"; 
import React, { useState,useEffect } from "react"; 
import { Link, useNavigate } from "react-router-dom"; 
import '../styles/contact.css';
const Contact=()=>{ 
const navigate=useNavigate() 
const [user,setUser]=useState([ 
      { 
        email : "", 
        name : "", 
        issue:"", 
        city:"", 
        state:"", 
        zip:"" 
      } 
    ]); 
const { email, name, issue,city,state,zip} = user; 
const onInputChange = (e) => { 
    setUser({ ...user, [e.target.name]: e.target.value }); 
  };
const onSubmit = async (e) => { 
   e.preventDefault(); 
    await axios.post("http://localhost:8080/api/test/contact", user); 
    alert("Details Submitted Successfully") 
    navigate("/") 
  }; 
 return( 
  <> 
  <h3 className="contact_detail">Contact Us</h3> 
  <div className="containone">    
  <form class="row g-4" onSubmit={(e) => onSubmit(e)}> 
  <br></br> 
  <div class="col-md-6">
  <br></br> 
    <label for="inputEmail4" class="form-label">Email</label> 
    <input type="email" name="email" value={email} onChange={(e) => onInputChange(e)} class="form-control" id="inputEmail4"/> 
  </div> 
  <div class="col-md-6"> 
    <br></br> 
    <label for="inputText" class="form-label">Name</label> 
    <input type="text" name="name" value={name} onChange={(e) => onInputChange(e)} class="form-control" id="inputText4"/> 
  </div> 
  <br></br> 
  <div class="col-12"> 
    <label for="inputAddress" class="form-label">Any Issues</label> 
    <input type="text" name="issue" value={issue} onChange={(e) => onInputChange(e)} class="form-control" id="inputAddress" placeholder="Contact-us and Clarify"/> 
  </div>
<div class="col-md-6"> 
    <label for="inputCity" class="form-label">City</label> 
    <input type="text" name="city" value={city} onChange={(e) => onInputChange(e)} class="form-control" id="inputCity"/> 
  </div> 
  <div class="col-md-4"> 
    <label for="inputState" class="form-label">State</label> 
    <select className="form-select" aria-label="size 3 select example" name="state" value={state} onChange={(e) => onInputChange(e)}> 
                      <option value="Other">Choose</option> 
                      <option value="karnataka">Karnataka</option> 
                      <option value="hyderabar">Hyderabad</option> 
                      <option value="pune">Pune</option> 
                    </select>
</div> 
  <div class="col-md-2"> 
    <label for="inputZip" class="form-label">Zip</label> 
    <input type="text" name="zip" value={zip} onChange={(e) => onInputChange(e)} class="form-control" id="inputZip"/> 
  </div>  
  <div class="col-12"> 
    <br></br> 
    <button type="submit" id="but" class="btn btn-primary ">Submit</button> 
  </div> 
</form> 
</div> 
<br></br> 
<div>
 <br></br> 
</div> 
</> 
 ); 
} 

export default Contact;

