import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const AddFood = () => {
const [content, setContent] = useState("");
let navigate = useNavigate();
const [users,setUsers]=useState([]);
const {id}=useParams();
const [user, setUser] = useState({
    name: "",
    price:"",
});
const [image,setImage] = useState()

const { name, price } = user;

const onInputChange = (e) => {
setUser({ ...user, [e.target.name]: e.target.value });
};

function PreviewImage(e) {
e.preventDefault();
let oFReader = new FileReader();
oFReader.readAsDataURL(e.target.files[0]);
oFReader.onload = function (oFREvent) {

  setImage(oFREvent.target.result);
  };
}

const onSubmit = async (e) => {

    e.preventDefault();


    let curruser = {
      name:name,
      price:price,
      image:image
    
    }
    
     await axios.post("http://localhost:8080/api/image",curruser);
    console.log(curruser)
     alert("Image Added Succesfully")

     navigate("/")

   };
    return (
        <div className="container">
      
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Add Food</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="FirstName" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Food Title"
                name="name"
                value={name}
                onChange={(e) =>onInputChange(e)}  />

            </div>
             
            <div className="mb-3">
              <label htmlFor="LastName" className="form-label">
                Price
              </label>
              <input
                type="text"
                className="form-control"
                name="price"
                value={price}
                onChange={(e) => onInputChange(e)}  />
            </div>
            <div className="mb-3">
              <label htmlFor="image" className="form-label">
                Upload Image
              </label>
              <input
                type="file"
                className="form-control"
                hidden
                placeholder="Choose Image"
                name="image"
                id="image"
                accept="image/*"
                onChange={(e) => PreviewImage(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
    )
}
export default AddFood
