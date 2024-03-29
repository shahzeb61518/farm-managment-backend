const express = require('express');
const router = express.Router();
const workAssignmentController = require('../controllers/workAssignment-controller');

// Create
router.post('/create', workAssignmentController.create);

//  get
router.post('/get', workAssignmentController.get);

// get by ID
router.post("/getbyid/:id", workAssignmentController.getById);

//  update
router.post('/update', workAssignmentController.update);

//  update
router.post('/archieved', workAssignmentController.archieved);

// delete
router.post('/delete', workAssignmentController.delete);

//  find by user id
router.post('/get-by-userid', workAssignmentController.getWorkByUserId);

// router.post('/checkauth', userController.checkAuth);
// router.get("/userProfile/:id", checkAuth, userController.getUserProfileById);

module.exports = router;
