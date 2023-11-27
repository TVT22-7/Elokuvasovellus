import React from 'react';
import Navigation from '../../components/Navigation/Navigation';  // Import the Navigation component
import './Settings.css';

function Settings() {
  const handleEditUI = () => {
    // Code to handle editing the UI
  };

  const handleDeleteAccount = () => {
    // Code to handle deleting the account
  };

  return (
    <div>
      <Navigation /> {}
      <h1>Settings</h1>
      <button onClick={handleEditUI}>Change theme</button>
      <button onClick={handleDeleteAccount}>Delete Account</button>
    </div>
  );
}

export default Settings;

