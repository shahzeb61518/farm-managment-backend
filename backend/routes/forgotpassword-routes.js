const express = require('express');
const router = express.Router();
const forgotPasswordController = require('../controllers/forgotpassword-controller');

// Create
router.post('/send', forgotPasswordController.sendMail);

//  get
// router.post('/get', forgotPasswordController.get);

//  update
// router.post('/update', forgotPasswordController.update);

// delete
// router.post('/delete', forgotPasswordController.delete);

// router.post('/checkauth', forgotPasswordController.checkAuth);
// router.get("/userProfile/:id", checkAuth, forgotPasswordController.getUserProfileById);

module.exports = router;
