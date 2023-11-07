import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Start from './pages/Start/Start';
import CreateAccount from './pages/CreateAccount/CreateAccount';
import Settings from './pages/settings/Settings';
import FriendGroups from './pages/friendGroups/FriendGroups';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Start />} />
                    <Route path="/login" element={<Login />} /> 
                    <Route path="/create-account" element={<CreateAccount />} /> 
                    <Route path="/home" element={<Home />} /> 
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/friend-groups" element={<FriendGroups />} />
                </Routes>
            </div>
        </Router>
    );  
}

export default App;
