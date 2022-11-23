import React, { useRef, useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import logo from './assets/Images/res-logo.png';
import Layout from './components/Layout/Layout';
import AuthService from "./Services/auth-service";
import Login from "./pages/Login";
import Home from "./pages/Home";
import AllFoods from "../src/pages/AllFoods.js";
import Cart from "../src/pages/Cart.js"; 
import Contact from "../src/pages/Contact.js";
import Profile from "./pages/Profile";
import AdminBoard from "./pages/AdminBoard";
import ContactBoard from "./pages/ContactBoard";
import EditUser from "./pages/EditUser";
import ViewUser from "./pages/ViewUser";
import AddFood from "./pages/AddFood";
import { useSelector, useDispatch } from "react-redux";
import Register from "./pages/Register";

const App = () => {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);
  
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
  };

  const getCartTotal = () => {
    return cart.reduce(
      (sum, { quantity }) => sum + quantity,
      0
    );
  };

  return (
    <div>
      <nav className="navbar navbar-expand navbar-white">
        <Link to={"/"} className="navbar-brand">
        <img src={logo} alt="logo" />
        <h5>美味的中国菜</h5>
        </Link>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/home"} className="nav-link">
              Home
            </Link>
          </li>
          {!currentUser && <li className="nav-item">
          <Link to={"/register"} className="nav-link">
          Signup
          </Link>
          </li>}
          
          {showAdminBoard && (
            <>
            <li className="nav-item">
              <Link to={"/admin"} className="nav-link">
                Updates
              </Link>
            </li>
            <li className="nav-item">
            <Link to={"/addFood"} className="nav-link">
              Add
            </Link>
          </li>
          <li className="nav-item">
              <Link to={"/contactBoard"} className="nav-link">
                Details
              </Link>
            </li>
          </>
          )} 

          {currentUser && !showAdminBoard && (
            <li className="nav-item">
              <Link to={"/foods"} className="nav-link">
                Food
              </Link>
            </li>
          )}
          {currentUser && !showAdminBoard && (
            <li className="nav-item">
              <Link to={"/cart"} className="nav-link">
                Cart <sup>{getCartTotal()}</sup>
              </Link>
            </li>
          )}
          {currentUser && !showAdminBoard && (
            <li className="nav-item">
              <Link to={"/contact"} className="nav-link">
                Contact
              </Link>
            </li>
          )}
          </div>
          
        {currentUser ? (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/profile"} className="nav-link">
                {currentUser.username}
              </Link>
            </li>
            
            
            <li className="nav-item">
              <a href="/login" className="nav-link" onClick={logOut}>
              <i class="ri-logout-circle-r-fill"></i>
              </a>
            </li>
          </div>
        
        ) : (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
              <i className="ri-user-line"></i>
              </Link>
            </li>

          </div>
        )}
      </nav>
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/foods" element={<AllFoods cart={cart} setCart={setCart}/>} />  
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/admin" element={<AdminBoard/>} />
          <Route path="/editUser/:id" element={<EditUser/>} />
          <Route path="/viewUser/:id" element={<ViewUser/>} />
          <Route path="/addFood" element={<AddFood/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/contactBoard" element={<ContactBoard/>} />
        </Routes>
      </div>
      <div>
       <Layout />
      </div>
    </div>
  );
};

export default App;