import React from 'react';
import { Link } from 'react-router-dom';
import './FriendGroups.css';

function FriendGroups() {
    return (
        <div className="friend-container">
            <h2>Friend List</h2>
            <ul className="friend-list">
                <li>Friend 1</li>
                <li>Friend 2</li>
                <li>Friend 3</li>
                <li>Friend 4</li>
            </ul>
            <Link to="/home">
                <button>Home</button>
            </Link>
        </div>
    );
}
export default FriendGroups;