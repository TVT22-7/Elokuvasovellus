import React from 'react';
import { Link } from 'react-router-dom';

function CreateAccount() {
    return (
        <div>
            <h1>Elokuvasovellus CreateAccount</h1>

            <div>
                <label htmlFor=" create username"> Create Username:</label>
                <input type="text" id="username" name="username" />
            </div>

            <div>
                <label htmlFor="password">Create Password:</label>
                <input type="password" id="password" name="password" />
            </div>

            <div>
                <label htmlFor="password"> Repeat Password:</label>
                <input type="password" id="password" name="password" />
            </div>

            <Link to="/home">
                <button>Home</button>
            </Link>
        </div>
    );
}

export default CreateAccount;

