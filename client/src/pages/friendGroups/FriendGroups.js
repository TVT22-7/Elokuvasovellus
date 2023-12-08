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

<<<<<<< Updated upstream
=======
    const handleGroupClick = (group) => {
        setSelectedGroup(group);
        setShowModal(true);
    };

    const Modal = ({ onClose }) => {
        return (
            <div className="modal">
                <div className="modal-content">
                    <span className="close" onClick={onClose}>&times;</span>
                    {selectedGroup && (
                        <div className='Group-page'>
                            <h2>{selectedGroup.group_name}</h2>
                            <p>{selectedGroup.description}</p>
                            {/* Lisää käyttäjän lisäämiseen tarvittava logiikka tähän */

                            <input 
                            type="text" 
                            className='addTogroup-input' 
                            placeholder="Add user in to this fancy group!" />
                            value={newGroupMember}

                            <ul className='group-users'>
                                {selectedGroup.users.map((user) => (
                                    <li key={user.user_id}>{user.username}</li>
                                ))}
                            </ul>

                                    

                            }
                        </div>
                    )}
                </div>
            </div>
        );
    };

>>>>>>> Stashed changes
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
