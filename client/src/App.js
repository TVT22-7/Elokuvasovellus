import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Start from './pages/Start/Start';


function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route exact path="/" element={Start} />
                    <Route path="/login" element={Login} />
                    <Route path="/home" element={Home} />
                </Routes>
            </div>
        </Router>
    );  
}

export default App;