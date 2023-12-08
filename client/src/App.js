import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Settings from './pages/settings/Settings';
import FriendGroups from './pages/friendGroups/FriendGroups';
import Auth from './pages/Auth/Auth';
import Review from './pages/Review/Review';
import './App.css';
import { createContext } from "react";
import { useState } from "react";

export const ThemeContext = React.createContext(null);

function App() {
    const [theme, setTheme] = useState("light");
    const toggleTheme = () => {
        setTheme((curr) => (curr === "light" ? "dark" : "light"));
       
    };
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <Router>
        <button onClick={toggleTheme}> Theme</button>
            <div className="App" id={theme}>
                <Routes>
                    <Route path="/" element={<Auth />} />
                    <Route path="/home" element={<Home />} /> 
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/friend-groups" element={<FriendGroups />} />
                    <Route path="/review" element={<Review />} />
                    
                </Routes>
            </div>
        </Router>
        </ThemeContext.Provider>
    );  
}

export default App;
