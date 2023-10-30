import React from 'react';
import { Link } from 'react-router-dom';

function LoginPage() {
    return (
        <div>
            <h1>Elokuvasovellus login</h1>

            <Link to="/home">
                <button>Home</button>
            </Link>
        </div>
    );
}

export default LoginPage;
