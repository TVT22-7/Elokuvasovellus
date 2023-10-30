import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <h1>Elokuvasovellus</h1>
            <button onClick={() => alert('Login clicked!')}>Login</button>
            <button onClick={() => alert('Sign Up clicked!')}>Sign Up</button>
        </div>
    );
}

export default App;
