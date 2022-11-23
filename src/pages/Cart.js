import '../styles/all-foods.css';

import React from 'react';

export default function Cart({ cart, setCart }) {
  const totalAmount = () => {
    return cart.reduce(
      (sum, { price, quantity }) => sum + price * quantity,
      0
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const deleteFromCart = (foodToRemove) => {
    setCart(
      cart.filter((food) => food !== foodToRemove)
    );
  };
  const paymentSuccess=()=>{
    window.alert("Your order is placed")
  }
  const handleChange = (food, d) => {
    const ind = cart.indexOf(food);
    
    const arr = cart;
    arr[ind].quantity += d;

    if (arr[ind].quantity === 0) arr[ind].quantity = 1;
    setCart([...arr]);
  };

  return (
    <div className="cart_img">  
      {cart.length > 0 && (
        <button class="btn fill" onClick={clearCart}>Remove All</button>
      )}
      <div className="foods cart_box ">
        {cart.map((food, idx) => (
          <div className="food cart_img" key={idx}>
            <img className='foods-image card_img card' src={food.image} alt={food.name} />
            <h3 className='text-center'>{food.name}</h3>
            <h4 className='text-center'><span>$</span> {food.price}</h4>
            
          <div className='incre_decre text-center'>
            <button class="btn btn-outline-primary " onClick={() => handleChange(food, 1)}>+</button>
            <button class="btn btn-outline-primary ">{food.quantity}</button>
            <button class=" btn btn-outline-primary" onClick={() => handleChange(food, -1)}>-</button>
          </div>
            <hr></hr>
            <div className='text-center'><button class="btn fill" onClick={() => deleteFromCart(food)}>
            <i class="ri-close-circle-fill"></i>
            </button></div>   
          </div>          
        ))}
      </div>     
      <div><h3>Sub Total: $ {totalAmount()}</h3></div>
      <button onClick={() => paymentSuccess()} class="btn fill " >Proceed to Pay</button>   
      </div> 
  );
}