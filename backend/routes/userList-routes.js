const express = require('express');
const router = express.Router();
const userListController = require('../controllers/userList-controller');

// Create user
router.post('/create-user', userListController.createUser);

// User by ID
router.post('/get', userListController.getUserById);

// User update
router.post('/update', userListController.userUpdate);

// router.post('/checkauth', userController.checkAuth);
// router.get("/userProfile/:id", checkAuth, userController.getUserProfileById);

module.exports = router;
