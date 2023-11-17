const express = require('express');
const GroupController = require('../controllers/groupController');
const { route } = require('./userRoutes');
const router = express.Router();

router.get('/groups', GroupController.getGroups);

router.get('/groups/:groupId', GroupController.getGroup);

router.get('/groups/:groupId/members', GroupController.getGroupMembers);

router.get('/groups/:groupId/members/:memberId', GroupController.getGroupMember);

router.delete('/groups/:groupId/members/:memberId', GroupController.deleteGroupMember);

router.patch('/groups/:groupId/members/:memberId', GroupController.updateGroupMember);

router.post('/groups/add-member', GroupController.addMemberToGroup);

router.post('/groups/create', GroupController.createGroup);

router.delete('/groups/:groupId', GroupController.deleteGroup);

