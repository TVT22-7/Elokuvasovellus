import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';


function HomePage() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
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
            <li><Link to="/settings">settings</Link></li>
            <li><Link to="/friendGroups">Friend Groups</Link></li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default HomePage;
