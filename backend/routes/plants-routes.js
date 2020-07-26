const express = require('express');
const router = express.Router();
const plantsController = require('../controllers/plants-controller');

// Creat
router.post('/create', plantsController.create);

// get
router.post('/get', plantsController.get);

// User update
router.post('/update', plantsController.update);

//  update
router.post('/archieved', plantsController.archieved);

// delete
router.post('/delete', plantsController.delete);

// router.post('/checkauth', userController.checkAuth);
// router.get("/userProfile/:id", checkAuth, userController.getUserProfileById);

module.exports = router;
