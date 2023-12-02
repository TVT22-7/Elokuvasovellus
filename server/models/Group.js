const db = require('../db');
const Group = {

    findAll: async () => {
        //finding all groups
        return await db.any('SELECT * FROM groups');
    },
    findById: async (id) => {
        //finding a group by id
        return await db.oneOrNone('SELECT * FROM groups WHERE group_id = $1', id);
    },
    create: async (group_id, group_name) => {
        //creating a new group
        return await db.one('INSERT INTO groups (group_id, group_name, descrption) VALUES ($1, $2, $3) RETURNING *', [group_id, group_name, description]);
    },
    update: async (id, groupData) => {
        //updating a group
        return await db.oneOrNone('UPDATE groups SET group_name = $1, group_description = $2, group_image = $3 WHERE group_id = $4 RETURNING *', [groupData.group_name, groupData.group_description, groupData.group_image, id]);
    },
    delete: async (id) => {
        //deleting a group
        return await db.oneOrNone('DELETE FROM groups WHERE group_id = $1', id);
    }
};

module.exports = Group;