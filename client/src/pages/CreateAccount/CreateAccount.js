import React from 'react';
import { Link } from 'react-router-dom';

function CreateAccount() {
    return (
        <div>
            <h1>Elokuvasovellus CreateAccount</h1>

            <Link to="/home">
                <button>Home</button>
            </Link>
        </div>
    );
}

export default CreateAccount;

