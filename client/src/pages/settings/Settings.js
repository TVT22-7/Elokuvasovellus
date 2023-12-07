import React from 'react';
import Navigation from '../../components/Navigation/Navigation';  // Import the Navigation component
import './Settings.css';
import { useState } from 'react';

function Settings() {
  



  const handleDeleteAccount = () => {
    // Code to handle deleting the account
  };


  return (
    <div>
      <Navigation />
      <h1>Settings</h1>
      
      <button onClick={handleDeleteAccount}>Delete Account</button>
      
      
    </div>
  );
}



export default Settings;

