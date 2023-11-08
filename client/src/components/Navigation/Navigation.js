import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const buttonText = isNavOpen ? 'Close navigation' : 'Open navigation';

  return (
    <>
    <div className='nav-container'>
      <button className="nav-button" onClick={toggleNav}>{buttonText}</button>
      {isNavOpen && (
        <div className="sivupalkki">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/settings">Settings</Link></li>
            <li><Link to="/friendGroups">Friend Groups</Link></li>
          </ul>
        </div>
      )}
      </div>
    </>
  );
}

export default Navigation;
