import React from 'react';
import { Link } from 'react-router-dom';


function Start() {
    return (
        <div>
            <h1>Elokuvasovellus Startpage</h1>
            <Link to="/login">
                <button>Login</button>
            </Link>

            <Link to="/Register">
                <button>SignUp</button>
            </Link>
        </div>
    );
}

export default Start;