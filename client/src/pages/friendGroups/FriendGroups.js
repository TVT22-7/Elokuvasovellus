// FriendGroups.js
import React, { useState, useEffect } from 'react';
import './FriendGroups.css';
import Navigation from '../../components/Navigation/Navigation';


function FriendGroups() {
    const [newGroupName, setNewGroupName] = useState('');

    const [newDescription, setNewDescription] = useState('');

    const [friendGroups, setFriendGroups] = useState([]);
    const [selectedGroup, setSelectedGroup] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        fetchGroupsFromDatabase();
    }, []);

    const fetchGroupsFromDatabase = async () => {
        try {
            const response = await fetch('http://localhost:4000/api/groups');
            const data = await response.json();

            console.log('Fetched groups:');

            setFriendGroups(data);
        } catch (error) {
            console.error('Error fetching groups from the database:', error);
        }
    };

    const handleGroupNameChange = (e) => {
        setNewGroupName(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setNewDescription(e.target.value);
    };

    const createGroup = async () => {

        if (newGroupName.trim() !== '') {
            try {
                const response = await fetch(
                    `${process.env.REACT_APP_ADDRESS}/api/groups/create`,
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },

                        body: JSON.stringify({ group_name: newGroupName, description: newDescription }),



                    }
                );

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
                        <div>
                            <h2>{selectedGroup.group_name}</h2>
                            <p>{selectedGroup.description}</p>
                            {/* Lisää käyttäjän lisäämiseen tarvittava logiikka tähän */}
                        </div>
                    )}
                </div>
            </div>
        );
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
    <li>Error fetching or no friend groups available</li>
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
                    placeholder="Describe your group"
                    value={newDescription}
                    onChange={handleDescriptionChange}
                />

                <button onClick={createGroup}>Create Group</button>

            </div>

            {showModal && <Modal onClose={() => setShowModal(false)} />}
        </div>
    );
}

export default FriendGroups;
