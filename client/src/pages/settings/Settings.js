import React from 'react';
import Navigation from '../../components/Navigation/Navigation';  // Import the Navigation component
import './Settings.css';
import { useState } from 'react';

function Settings() {
  const [theme, setTheme] = useState('light');



  const handleDeleteAccount = () => {
    // Code to handle deleting the account
  };

  const handleEditUI = () => {
    setTheme(theme === 'light' ? 'dark' : 'light'); // create function to actually change the theme.

  };

  return (
    <div>
      <Navigation />
      <h1>Settings</h1>
      <button onClick={handleEditUI}>Change theme</button>
      <button onClick={handleDeleteAccount}>Delete Account</button>
      <p>Current theme: {theme}</p>
      
    </div>
  );
}



export default Settings;

