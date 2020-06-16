const express = require('express');
const router = express.Router();
const siteController = require('../controllers/site-controller');

// Create 
router.post('/create', siteController.create);

// get
router.post('/get', siteController.get);

// update
router.post('/update', siteController.update);

// delete
router.post('/delete', siteController.delete);

// router.post('/checkauth', userController.checkAuth);
// router.get("/userProfile/:id", checkAuth, userController.getUserProfileById);

module.exports = router;
