import React from 'react';
import './logout.css';

function Logout() {
  const handleYesClick = () => {
    // Remove the token from local storage
    localStorage.removeItem('token');
    localStorage.removeItem('usertype');
    localStorage.removeItem('isLoggedin');


    // Redirect to the login page or any other desired page after logout
    window.location.href = '/signup';
  };

  const handleNoClick = () => {
    // Redirect to the home page
    window.location.href = '/user';
  };

  return (
    <div className="logout-container">
      <h1 className="logout-title">Are you sure you want to log out?</h1>
      <div className="button-container">
        <button className="logout-button" onClick={handleYesClick}>Yes</button>
        <button className="logout-button" onClick={handleNoClick}>No</button>
      </div>
    </div>
  );
}

export default Logout;
