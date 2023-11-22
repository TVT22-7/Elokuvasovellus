const db = require('../db');
const sequelize = require('sequelize');


const GroupMembers = {
    findAll: async () => {
        return await db.any('SELECT * FROM group_members');
    },

    findById: async (id) => {
        return await db.oneOrNone('SELECT * FROM group_members WHERE group_member_id = $1', id);
    },

    create: async (group_id, user_id, status) => {
        //  creating a new group member
        return await db.one('INSERT INTO group_members (group_id, user_id, status) VALUES ($1, $2, $3) RETURNING *', [group_id, user_id, status]);
    },

    update: async (id, groupMemberData) => {
        //  updating a group member
        return await db.oneOrNone('UPDATE group_members SET group_id = $1, user_id = $2, status = $3 WHERE group_member_id = $4 RETURNING *', [groupMemberData.group_id, groupMemberData.user_id, groupMemberData.status, id]);
    },

    delete: async (id) => {
        //  deleting a group member
        return await db.oneOrNone('DELETE FROM group_members WHERE group_member_id = $1', id);
    },
};

module.exports = GroupMembers;
