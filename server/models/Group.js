const db = require('../db');
const Group = {

    findAll: async () => {
        //finding all groups
        return await db.any('SELECT * FROM groups');
    },
    findById: async (id) => {
        //finding a group by id
        return await db.oneOrNone('SELECT * FROM groups WHERE group_id = $1', [id]);
    },
<<<<<<< Updated upstream
    create: async (groupData) => {
        const groupName = groupData.group_name || '';
        //creating a new group
        return await db.one('INSERT INTO groups (group_name, description) VALUES ($1, $2) RETURNING *', [groupData.group_name, groupData.description]);
=======
    create: async (group_name, description) => {
        //creating a new group
        return await db.one('INSERT INTO groups (group_name, description) VALUES ($1, $2) RETURNING *', [group_name, description]);
>>>>>>> Stashed changes
    },
    update: async (groupData) => {
        //updating a group
        return await db.oneOrNone('UPDATE groups SET group_name = $1, description = $2 WHERE group_id = $3 RETURNING *', [groupData.group_name, groupData.description, groupData.group_id]);
    },
    delete: async (id) => {
        //deleting a group
        return await db.oneOrNone('DELETE FROM groups WHERE group_id = $1', [id]);
    }
};

module.exports = Group;