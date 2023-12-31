const GroupMembers = require('../models/GroupMembers');
const Group = require('../models/Group');
const { use } = require('chai');


// Get all groups
exports.getGroups = async (req, res) => {
    try {
        const groups = await Group.findAll();
        res.json(groups);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get a single group by ID
exports.getGroup = async (req, res) => {
    try {
        const group = await Group.findById(req.params.groupId);
        if (group) {
            res.json(group);
        } else {
            res.status(404).send('Group not found');
        }
    } catch (err) {
        console.log(err);
        res.status(500).send(err.message);
    }
};

// Get all group members
exports.getGroupMembers = async (req, res) => {
    try {
        const groupMembers = await GroupMembers.findAll();
        res.json(groupMembers);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get a single group member by ID
exports.getGroupMember = async (req, res) => {
    try {
        const groupMember = await GroupMembers.findById(req.params.id);
        if (groupMember) {
            res.json(groupMember);
        } else {
            res.status(404).send('Group member not found');
        }
    } catch (err) {
        res.status(500).send(err.message);
    }
};

// Update group member information
exports.updateGroupMember = async (req, res) => {
    try {
        const updatedGroupMember = await GroupMembers.update(req.params.id, req.body);
        res.json(updatedGroupMember);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Delete a group member
exports.deleteGroupMember = async (req, res) => {
    try {
        await GroupMembers.delete(req.params.groupId);
        res.send({ message: 'Group member removed' });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Add a member to a group
exports.addMemberToGroup = async (req, res) => {
    const { group_id, user_id, status } = req.body;

    try {
        const groupMemberExists = await GroupMembers.findOne({
            where: {
                group_id,
                user_id,
            },
        });

        if (groupMemberExists) {
            return res.status(409).json({ error: 'User is already a member of the group' });
        }

        const newGroupMember = await GroupMembers.create({ group_id, user_id, status });

        res.status(201).json(newGroupMember);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while adding a member to the group' });
    }
};

// Delete a group
exports.deleteGroup = async (req, res) => {
    try {
        const groupId = req.params.groupId;
        console.log('Deleting group with id: ', groupId);
        await Group.delete(groupId);
        res.send({ message: 'Group removed' });
    } catch (error) {
        await Group.delete(groupId);
        res.status(500).send(error.message);
    }
};

// Create a group
exports.createGroup = async (req, res) => {
    const { group_name, description} = req.body;
    owner_id = req.user_id;

    try {
      
        const newGroup = await Group.create(group_name, description, owner_id);

        res.status(201).json(newGroup);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while creating the group' });
    }
};
