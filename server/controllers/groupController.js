const Group = require('../models/Group');
const GroupMember = require('../models/GroupMember');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const GroupController = {
    async addMember(req, res) {
        const { group_id, user_id } = req.body;

        try {
            const group = await Group.findById(group_id);
            const user = await User.findById(user_id);

            if (!group) {
                return res.status(404).json({ error: 'Group not found' });
            }

            await GroupMember.create({group_id, user_id});
            res.json({ message: 'Member added' });
            
        } catch (error) {
            res.status(500).json({ error: InternalServerError });
        }
        create: async (group_name, group_description, group_image) => {
            return await db.one('INSERT INTO groups (group_name, group_description, group_image) VALUES ($1, $2, $3) RETURNING *', [group_name, group_description, group_image]);
    
        }}};