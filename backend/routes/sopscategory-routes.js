const express = require('express');
const router = express.Router();
const sopsCategoryController = require('../controllers/sopscategory-controller');

// Create
router.post('/create', sopsCategoryController.create);

//  get
router.post('/get', sopsCategoryController.get);

//  update
router.post('/update', sopsCategoryController.update);

// delete
router.post('/delete', sopsCategoryController.delete);

// router.post('/checkauth', userController.checkAuth);
// router.get("/userProfile/:id", checkAuth, userController.getUserProfileById);

module.exports = router;
