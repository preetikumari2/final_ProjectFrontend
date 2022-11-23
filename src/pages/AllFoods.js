import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from "react-redux";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../styles/all-foods.css';


const AllFoods = ({setCart,cart}) => {


  
  const dispatch = useDispatch();
  
    const [users,setUsers]=useState([
            {
              name:"",
              image:"",
              price:"",
            }
          ]);
          useEffect(() => {
            AllUsers();
          }, []);
          const AllUsers = async () => {
            axios.get('http://localhost:8080/api/allimages').then((response)=>{
               setUsers(response.data);
               console.log(users);
           })}

           const addToCart = (user) => {


            // console.log(product)
        
           
        
            let newCart = [...cart];
        
            let itemInCart = newCart.find(
        
              (item) => user.name === item.name
            );
        
           
        
            if (itemInCart) {
        
              itemInCart.quantity++;
        
            } else {
        
              itemInCart = {
        
                ...user,
        
                quantity: 1,
        
              };
        
              newCart.push(itemInCart);
        
            }
        
            setCart(newCart);
        
            // console.log(newCart)
        
          };
    return (
        <div className="food_containers ">
            {
        users?.map((user,index)=>{
                            return(
                            <div className="col">                        
                            <div className="card">                        
                              <img src={user.image} class="image_div card-img-top" alt="..."/>
                              <div className="card-body">
                                <h5 className="card-title">{user.name}</h5>
                                <p className="card-text">{user.price}</p>
                                <button className="product-add-button" onClick={() => addToCart(user)}>
                                Add to Cart</button>
                              </div>
                            </div>
                          </div>)})
          }
        </div>
    )
}

export default AllFoods
