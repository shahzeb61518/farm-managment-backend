const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users-controller');

// Create user
router.post('/create-user', usersController.create);

// User by ID
router.post('/get', usersController.get);

// User update
router.post('/update', usersController.update);

// User update
router.post('/delete', usersController.delete);

// router.post('/checkauth', userController.checkAuth);
// router.get("/userProfile/:id", checkAuth, userController.getUserProfileById);

module.exports = router;
