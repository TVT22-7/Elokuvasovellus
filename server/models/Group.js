const sequelize = require('sequelize');
const db = require('../db');

const Group = {

    findById: async (id) => {
        //finding a group by id
        return await db.oneOrNone('SELECT * FROM groups WHERE group_id = $1', id);
    },
    create: async (group_name, group_description, group_image) => {
        //creating a new group
        return await db.one('INSERT INTO groups (group_name, group_description, group_image) VALUES ($1, $2, $3) RETURNING *', [group_name, group_description, group_image]);
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