import React from 'react';
import { Link } from 'react-router-dom';

function LoginPage() {
    return (
        <div>
            <h1>Elokuvasovellus login</h1>

            <div>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" />
            </div>

            <div>
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
