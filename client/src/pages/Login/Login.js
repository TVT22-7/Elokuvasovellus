import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function LoginPage() {
    return (
        <div>
            <h1>Elokuvasovellus login</h1>

            <div className="form-group">
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" />
            </div>

            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" />
            </div>

            <Link to="/home">
                <button>Home</button>
            </Link>
        </div>
    );
}

export default LoginPage;
