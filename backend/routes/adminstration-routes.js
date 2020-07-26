const express = require('express');
const router = express.Router();
const adminstrationController = require('../controllers/adminstration-controller');

// Super Admin Login
// router.post('/super-admin-login', adminstrationController.superAdminLogin);

// Create Admin
router.post('/create-admin', adminstrationController.createAdmin);

// Login Admin
router.post('/login-admin', adminstrationController.adminLogin);

// Admin by ID
router.post('/delete', adminstrationController.deleteAdmin);

// Admin get
router.post('/get', adminstrationController.getAdmin);

// Admin update
router.post('/update', adminstrationController.updateAdmin);

//  update
router.post('/archieved', adminstrationController.archieved);

// router.post('/checkauth', adminstrationController.checkAuth);
// router.get("/AdminProfile/:id", checkAuth, adminstrationController.getAdminProfileById);

module.exports = router;
