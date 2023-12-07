import React, { useState, useEffect } from 'react';
import './FriendGroups.css';
import Navigation from '../../components/Navigation/Navigation';

function FriendGroups() {
    const [newGroupName, setNewGroupName] = useState('');
    const [newGroupDescription, setNewGroupDescription] = useState('');
    const [friendGroups, setFriendGroups] = useState([]);

    useEffect(() => {
        fetchGroupsFromDatabase();
    }, []);

    const fetchGroupsFromDatabase = async () => {
        try {
            const response = await fetch('http://localhost:4000/api/groups');
            const data = await response.json();
            console.log('Fetched groups:', data);
            setFriendGroups(data);
        } catch (error) {
            console.error('Error fetching groups from the database:', error);
        }
    };

    const handleGroupNameChange = (e) => {
        setNewGroupName(e.target.value);
    };

    const handleGroupDescriptionChange = (e) => {
        setNewGroupDescription(e.target.value);
    };

    const handleCreateGroup = async () => {
        if (newGroupName.trim() !== '') {
            try {
                const response = await fetch(
                    `${process.env.REACT_APP_ADDRESS}/api/groups/create`,
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ name: newGroupName }),
                    }
                ); // <-- Removed the extra `}` here
    
                if (response.ok) {
                    fetchGroupsFromDatabase();
                    setNewGroupName('');
                    setNewGroupDescription('');
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
                {friendGroups.length > 0 ? (
                    friendGroups.map((group) => (
                        <li key={group.group_id}>{group.group_name}</li>
                    ))
                ) : (
                    <p>No groups found</p>
                )}
            </ul>
            <div className="create-group">
                <input
                    type="text"
                    placeholder="Enter group name"
                    value={newGroupName}
                    onChange={handleGroupNameChange}
                />
                <input
                    type="text"
                    placeholder="Enter group description"
                    value={newGroupDescription}
                    onChange={handleGroupDescriptionChange}
                />
                <button onClick={handleCreateGroup}>Create Group</button>
            </div>
        </div>
    );
}

export default FriendGroups;