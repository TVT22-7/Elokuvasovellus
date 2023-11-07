import React from 'react';
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
      <h1>Settings</h1>
      <button onClick={handleEditUI}>Change Theme</button>
      <button onClick={handleDeleteAccount}>Delete Account</button>
    </div>
  );
}

export default Settings;
