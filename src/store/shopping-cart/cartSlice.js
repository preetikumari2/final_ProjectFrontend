// import { createSlice } from '@reduxjs/toolkit';
// import { useReducer } from 'react';

// const initialState = {
//     cartItems: [],
//     totalQantity: 0,
//     totalAmount: 0
// }
// const cartSlice = createSlice({
//     name: 'cart',
//     initialState: initialState,

//     reducers: {
//         addItem(state, action){
//             const user = action.payload
//             const existingItem = state.cartItems.find(item => item.id === user.id)
//             state.totalQantity++;

//             if(!existingItem){
//                 state.cartItems.push({
//                     id: user.id,
//                     title: user.name,
//                     image: user.image,
//                     price: user.price,
//                     quantity: 1,
//                     totalPrice: user.price 
//                 })
//             }
//             else{
//                 existingItem.quantity++
//                 existingItem.totalPrice = Number(existingItem.totalPrice) + Number(user.price)
//             }
//             state.totalAmount = state.cartItems.reduce((total, item) =>
//                 total + Number(item.price) * Number(item.quantity), 0
//             );
//         },
//         //========== remove item=============
//         removeItem(state, action){
//             const id = action.payload;
//             const existingItem = state.cartItems.find(item => item.id === id)
//             state.totalQantity--

//             if(existingItem.quantity === 1){
//                 state.cartItems = state.cartItems.filter(item => item.id !== id);
//             }

//             else{
//                 existingItem.quantity--;
//                 existingItem.totalPrice = Number(existingItem.totalPrice) - Number(existingItem.price);
//             }
//             state.totalAmount = state.cartItems.reduce((total, item) => 
//                 total + Number(item.price) * Number(item.quantity), 0
//             );
//         },

//         //=========== delete item =========
//         deleteItem(state, action){
//             const id = action.payload;
//             const existingItem = state.cartItems.find(item => item.id === id)

//             if(existingItem){
//                 state.cartItems = state.cartItems.filter(item => item.id !== id)
//                 state.totalQantity = state.totalQantity - existingItem.quantity
//             }

//             state.totalAmount = state.cartItems.reduce((total, item) => 
//                 total + Number(item.price) * Number(item.quantity), 0
//             );
//         },
//     },
// });
// export const cartActions = cartSlice.actions
// export default cartSlice;