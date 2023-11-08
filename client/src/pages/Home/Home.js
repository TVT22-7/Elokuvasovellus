import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie'; // Import useCookies
import './Home.css';

function HomePage() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(['AuthToken']);
  const navigate = useNavigate();

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleSignOut = () => {
    removeCookie('AuthToken', { path: '/' });
    removeCookie('Username', { path: '/' }); 
    navigate('/');
  };

  const buttonText = isNavOpen ? "Sulje valikko" : "Avaa valikko";

  return (
    <div>
      <h1>Elokuvasovellus home</h1>
      <input type="text" className='movie-search' placeholder="Search for movies" />
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
      <button onClick={handleSignOut} className="sign-out-button">Sign Out</button> {/* Sign out button */}
    </div>
  );
}

export default HomePage;
