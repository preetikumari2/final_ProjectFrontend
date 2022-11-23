import React from "react";
import AuthService from "../Services/auth-service";
import '../styles/profile.css';

const Profile = () => {
  const currentUser = AuthService.getCurrentUser();

  return (
    <div className="container">
      
        <h3>Name: 
          <strong> {currentUser.username}</strong>
        </h3>
  
      <p>
        <strong>Email:</strong> {currentUser.email}
      </p>
      
    </div>
  );
};

export default Profile;