const express = require('express');
const router = express.Router();
const itemsController = require('../controllers/items-controller');

// Create  
router.post('/create', itemsController.create);

//   get
router.post('/get', itemsController.get);

//   update
router.post('/update', itemsController.update);

//  update
router.post('/archieved', itemsController.archieved);

//   delete
router.post('/delete', itemsController.delete);

// router.post('/checkauth',  Controller.checkAuth);
// router.get("/ Profile/:id", checkAuth,  Controller.get ProfileById);

module.exports = router;
