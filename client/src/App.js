import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Start from './pages/Start/Start';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Start />} />
                    <Route path="/login" element={<Login />} /> 
                    <Route path="/home" element={<Home />} /> 
                </Routes>
            </div>
        </Router>
    );  
}

export default App;
