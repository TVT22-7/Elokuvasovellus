const express = require('express');
const { getGroupMembers, getGroups, getGroup, getGroupMember, updateGroupMember, deleteGroupMember, deleteGroup, addMemberToGroup, createGroup } = require('../controllers/groupController');

const router = express.Router();

router.get('/groups', getGroups);

router.get('/groups/:groupId', getGroup);

router.get('/groups/:groupId/members', getGroupMembers);

router.get('/groups/:groupId/members/:memberId', getGroupMember);

router.delete('/groups/:groupId/members/:memberId', deleteGroupMember);

router.patch('/groups/:groupId/members/:memberId', updateGroupMember);

router.post('/groups/add-member', addMemberToGroup);

router.post('/groups/create', createGroup);

router.delete('/groups/:groupId', deleteGroup);

module.exports = router;


router.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error routessa' });
});