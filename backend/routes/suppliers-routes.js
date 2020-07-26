const express = require('express');
const router = express.Router();
const suppliersController = require('../controllers/suppliers-controller');

// Creat
router.post('/create', suppliersController.create);

// get
router.post('/get', suppliersController.get);

// update
router.post('/update', suppliersController.update);

//  update
router.post('/archieved', suppliersController.archieved);

// delete
router.post('/delete', suppliersController.delete);

// router.post('/checkauth', userController.checkAuth);
// router.get("/userProfile/:id", checkAuth, userController.getUserProfileById);

module.exports = router;
