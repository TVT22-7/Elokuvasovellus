import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  // State to manage whether the nav is open
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Function to toggle the nav open and closed
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  // Determine the button text based on the nav state
  const buttonText = isNavOpen ? 'Close navigation' : 'Open navigation';

  return (
    <>
      <button onClick={toggleNav}>{buttonText}</button>
      {isNavOpen && (
        <div className="sivupalkki">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/settings">Settings</Link></li>
            <li><Link to="/friendGroups">Friend Groups</Link></li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Navigation;
