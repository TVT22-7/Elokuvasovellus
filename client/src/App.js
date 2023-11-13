import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Settings from './pages/settings/Settings';
import FriendGroups from './pages/friendGroups/FriendGroups';
import Auth from './pages/Auth/Auth';
import './App.css';


function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Auth />} />
                    <Route path="/home" element={<Home />} /> 
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/friend-groups" element={<FriendGroups />} />
                </Routes>
            </div>
        </Router>
    );  
}

export default App;
