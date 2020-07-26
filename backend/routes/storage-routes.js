const express = require('express');
const router = express.Router();
const storageController = require('../controllers/storage-controller');

// Create
router.post('/create', storageController.create);

// get
router.post('/get', storageController.get);

// update
router.post('/update', storageController.update);

//  update
router.post('/archieved', storageController.archieved);

//delete
router.post('/delete', storageController.delete);

// router.post('/checkauth', userController.checkAuth);
// router.get("/userProfile/:id", checkAuth, userController.getUserProfileById);

module.exports = router;
