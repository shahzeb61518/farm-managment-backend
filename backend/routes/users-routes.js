const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users-controller');

// Create user
router.post('/create-user', usersController.create);

// login
router.post('/login', usersController.login);

// Users
router.post('/get', usersController.get);

// User for super admin
router.post('/get-for-superadmin', usersController.getForSuperAdmin);

// User update
router.post('/update', usersController.update);

// update super admin
router.post('/update-super-admin', usersController.updateSuperAdmin);

//  update
router.post('/archieved', usersController.archieved);

// Userdelete
router.post('/delete', usersController.delete);

//  get user by id
router.post('/get-by-id', usersController.getById);

// router.post('/checkauth', userController.checkAuth);
// router.get("/userProfile/:id", checkAuth, userController.getUserProfileById);

module.exports = router;
