// Settings.js
import React, { useState } from 'react';
import Navigation from '../../components/Navigation/Navigation';
import './Settings.css';
import { useCookies } from 'react-cookie';

function Settings() {
  const [cookies, , removeCookie] = useCookies(['AuthToken', 'userId']);
  const [isAccountDeleted, setIsAccountDeleted] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleDeleteAccount = async () => {
    try {
      // Check if the user is authenticated
      if (!cookies.AuthToken || !cookies.userId) {
        setIsAccountDeleted(false);
        return;
      }

      const response = await fetch(
        `${process.env.REACT_APP_ADDRESS}/api/users/${cookies.userId}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${cookies.AuthToken}`,
          },
          body: JSON.stringify({ username, password }),
        }
      );

      if (response.ok) {
        // Account deleted successfully
        removeCookie('Username');
        removeCookie('AuthToken');
        removeCookie('userId');
        setIsAccountDeleted(true); // Aseta tila, että tili on poistettu
      } else {
        setIsAccountDeleted(false);
      }
    } catch (error) {
      console.error('Error deleting account', error);
      setIsAccountDeleted(false);
    }
  };

  return (
    <div className='asetukset'>
      <Navigation />
      <h1>Settings</h1>

      {isAccountDeleted ? (
        <p>Account deleted</p>
      ) : (
        <div>
          <button className='Delete-Acc' onClick={handleDeleteAccount}>
            Delete Account
          </button>
        </div>
      )}
    </div>
  );
}

export default Settings;
