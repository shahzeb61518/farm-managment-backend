const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users-controller');

// Create user
router.post('/create-user', usersController.createUser);

// User by ID
router.post('/get', usersController.getUsers);

// User update
router.post('/update', usersController.userUpdate);

// User update
router.post('/delete', usersController.deleteUser);

// router.post('/checkauth', userController.checkAuth);
// router.get("/userProfile/:id", checkAuth, userController.getUserProfileById);

module.exports = router;
