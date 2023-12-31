// FriendGroups.js
import React, { useState, useEffect } from 'react';
import './FriendGroups.css';
import Navigation from '../../components/Navigation/Navigation';
import { useCookies } from 'react-cookie'; // Add this import statement

function FriendGroups() {
    const [newGroupName, setNewGroupName] = useState('');
    const [newGroupDescription, setNewGroupDescription] = useState('');
    const [friendGroups, setFriendGroups] = useState([]);
    const [selectedGroup, setSelectedGroup] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [cookies, setCookie] = useCookies(['AuthToken']); // Initialize cookies
    


    useEffect(() => {
        fetchGroupsFromDatabase();
    }, []);

    const fetchGroupsFromDatabase = async () => {
        try {
            const response = await fetch('http://localhost:4000/api/groups');
            const data = await response.json();
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

    const parseJwt = (token) => {
        try {
            const base64Url = token.split('.')[1];
            const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            const jsonPayload = decodeURIComponent(atob(base64).split('').map((c) => `%${(`00${c.charCodeAt(0).toString(16)}`).slice(-2)}`).join(''));
    
            return JSON.parse(jsonPayload);
        } catch (error) {
            console.error('Error parsing JWT:', error);
            return null;  
        }
    };

    const handleCreateGroup = async () => {
        if (newGroupName.trim() !== '') {
            try {
                const authToken = cookies.AuthToken;
    
                if (!authToken) {
                    console.error('Authentication token is not available');
                    return;
                }
    
                const decodedToken = parseJwt(authToken);
    
                if (!decodedToken || !decodedToken.id) {
                    console.error('User ID is not available');
                    return;
                }
    
                const response = await fetch(
                    `${process.env.REACT_APP_ADDRESS}/api/groups/create`,
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            group_name: newGroupName,
                            description: newGroupDescription,
                            owner_id: decodedToken.id, // Corrected parameter name to owner_id
                        }),
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
                        <li key={group.group_id} onClick={() => handleGroupClick(group)}>
                            {group.group_name}
                        </li>
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

            {showModal && <Modal onClose={() => setShowModal(false)} />}
        </div>
    );
}

export default FriendGroups;
