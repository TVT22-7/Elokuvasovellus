import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './FriendGroups.css';
import Navigation from '../../components/Navigation/Navigation';

function FriendGroups() {
    const [newGroupName, setNewGroupName] = useState('');
    const [friendGroups, setFriendGroups] = useState([]);

    useEffect(() => {

        fetchGroupsFromDatabase();
    }, []);

    const fetchGroupsFromDatabase = async () => {
        try {
<<<<<<< Updated upstream
            const response = await fetch('http://localhost:3001/friend-groups');
=======
            const response = await fetch('http://localhost:4000/api/groups');
>>>>>>> Stashed changes
            const data = await response.json();
            setFriendGroups(data);
        } catch (error) {
            console.error('Error fetching groups from the database:', error);
        }
    };

    const handleGroupNameChange = (e) => {
        setNewGroupName(e.target.value);
    };

    const handleCreateGroup = async () => {
        if (newGroupName.trim() !== '') {
            try {
                // Lähetä uuden ryhmän tiedot tietokantaan
<<<<<<< Updated upstream
                const response = await fetch('http://localhost:3001/friend-groups', {
=======
                const response = await fetch(
                `${process.env.REACT_APP_ADDRESS}/api/groups/create`, 
                {
>>>>>>> Stashed changes
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ name: newGroupName }),
                });

                if (response.ok) {
                    fetchGroupsFromDatabase();
                    setNewGroupName('');
                } else {
                    console.error('Error creating group:', response.statusText);
                }
            } catch (error) {
                console.error('Error creating group:', error);
            }
        }
    };

    return (
        <div className="friend-container">
            <Navigation />
            <h1>Friend Groups</h1>
            <ul className="friend-list">
                {friendGroups.map((group) => (
                    <li key={group.id}>{group.name}</li>
                ))}
            </ul>
            <div className='create-group'>
                <input
                    type="text"
                    placeholder="Enter group name"
                    value={newGroupName}
                    onChange={handleGroupNameChange}
                />
                <button onClick={handleCreateGroup}>Create Group</button>
            </div>
        </div>
    );
}

export default FriendGroups;
