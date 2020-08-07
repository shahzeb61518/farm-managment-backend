const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chat-controller');

// Create
router.post('/create', chatController.create);

//  get
router.post('/get', chatController.get);

//  update
router.post('/update', chatController.update);

//  update
router.post('/archieved', chatController.archieved);

// delete
router.post('/delete', chatController.delete);

// router.post('/checkauth', userController.checkAuth);
// router.get("/userProfile/:id", checkAuth, userController.getUserProfileById);

module.exports = router;
