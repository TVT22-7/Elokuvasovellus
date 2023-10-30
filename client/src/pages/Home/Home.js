import React from 'react';
import axios from 'axios';


function HomePage() {
    const handleButtonClick = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/users');
            console.log(response.data);
        }   catch (error) {
            console.log(error);
        }
    };
    return (
        <div>
            <h1>Elokuvasovellus home</h1>
            <button onClick={handleButtonClick}>Get Users</button>
        </div>
    );
}

export default HomePage;



