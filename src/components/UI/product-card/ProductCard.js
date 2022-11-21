import React, { useState, useEffect}from "react";
import '../../../styles/product-cart.css';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice.js";
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProductCard = (props) => {
  const { id, title, image01, price } = props.item;
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        image01,
        price
      })
    );
  };
  const [users,setUsers]=useState([
    {
      name:"",
      description:"",
      image:"",
      price:"",
    }
  ]);
  useEffect(() => {
    AllUsers();
  }, []);
  const AllUsers = async () => {
    axios.get('http://localhost:8080/api/test/image/allimages').then((response)=>{
       setUsers(response.data);
       console.log(response);
   })}
  return (
    <div className="product_item">
      <div className="product_img">
        <img src={image01} alt="product-img" className="w-50" />
      </div>
      <div className="product_content">
        <h5>
          <Link to={`/foods/ ${id} `}>{title}</Link>
          {
        users.map((user,index)=>{
                            return(
                            <div className="col">                        
                            <div className="card">                        
                              <img src={user.image} class="card-img-top" alt="..."/>
                              <div className="card-body">
                                <h5 className="card-title">{user.name}</h5>
                                <p className="card-text">{user.description}</p>
                                <p className="card-text">{user.price}</p>
                              </div>
                            </div>
                          </div>)})
          }
        </h5>
        <div className=" d-flex align-items-center justify-content-between ">
          <span className="product_price">${price}</span>
          <button className="addTOCart_btn" onClick={addToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
