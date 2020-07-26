const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users-controller');

// Create user
router.post('/create-user', usersController.create);

// login
router.post('/login', usersController.login);

// User by ID
router.post('/get', usersController.get);


// User update
router.post('/update', usersController.update);

//  update
router.post('/archieved', usersController.archieved);

// Userdelete
router.post('/delete', usersController.delete);

// router.post('/checkauth', userController.checkAuth);
// router.get("/userProfile/:id", checkAuth, userController.getUserProfileById);

module.exports = router;
