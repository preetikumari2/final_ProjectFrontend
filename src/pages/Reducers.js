const Reducer=(cart=[],action)=>{
 if(action.type==="ADD"){
 let tempcart=cart.filter((user)=>user.id===action.payload.id);
 if(tempcart<1){
 return [...cart,action.payload];

 }
 else{
 return cart;
}
}if(action.type==="REMOVE")
{
 return cart.filter((user)=>user.id!==action.payload.id);
 }
if (action.type==="INCREASE"){
let tempcart=cart.map((user)=>{
 if(user.id===action.payload.id){
 return {...user,quantity:user.quantity++};
 }
 return user;
 });


return tempcart;
 }
if (action.type==="DECREASE"){
let tempcart=cart.map((user)=>{
if(user.id===action.payload.id){
 return {...user,quantity:user.quantity-1};
 }
 return user;
 });
 return tempcart;
 }
 return cart;

};

export default Reducer;

