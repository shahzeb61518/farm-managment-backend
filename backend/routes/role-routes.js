const express = require('express');
const router = express.Router();
const roleController = require('../controllers/role-controller');

// Create
router.post('/create', roleController.create);

//  get
router.post('/get', roleController.get);

//  update
router.post('/update', roleController.update);

// delete
router.post('/delete', roleController.delete);

// router.post('/checkauth', userController.checkAuth);
// router.get("/userProfile/:id", checkAuth, userController.getUserProfileById);

module.exports = router;
