import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <div className='nav-container'>
        <button className="nav-button" onClick={toggleNav}>
          {isNavOpen ? 'Close navigation' : 'Open navigation'}
        </button>
        {isNavOpen && (
          <div className="sivupalkki">
            <button className="close-button" onClick={toggleNav}>Close</button> 
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/settings">Settings</Link></li>
              <li><Link to="/friend-groups">Friend Groups</Link></li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navigation;
