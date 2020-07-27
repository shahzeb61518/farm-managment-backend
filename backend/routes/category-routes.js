const express = require('express');
const router = express.Router();
const sopsCategoryController = require('../controllers/sopscategory-controller');
const itemsCategoryController = require('../controllers/itemscategory-controller');
const suppliersCategoryController = require('../controllers/supplierscategory-controller');

// SOPS
// Create
router.post('/sopscategory/create', sopsCategoryController.create);
//  get
router.post('/sopscategory/get', sopsCategoryController.get);
//  update
router.post('/sopscategory/update', sopsCategoryController.update);
// delete
router.post('/sopscategory/delete', sopsCategoryController.delete);
//  archive
router.post('/sopscategory/archieved', sopsCategoryController.archieved);

// Items
// Create
router.post('/itemscategory/create', itemsCategoryController.create);
//  get
router.post('/itemscategory/get', itemsCategoryController.get);
//  update
router.post('/itemscategory/update', itemsCategoryController.update);
// delete
router.post('/itemscategory/delete', itemsCategoryController.delete);
//  archive
router.post('/itemscategory/archieved', itemsCategoryController.archieved);

// Suppliers
// Create
router.post('/supplierscategory/create', suppliersCategoryController.create);
//  get
router.post('/supplierscategory/get', suppliersCategoryController.get);
//  update
router.post('/supplierscategory/update', suppliersCategoryController.update);
// delete
router.post('/supplierscategory/delete', suppliersCategoryController.delete);
//  archive
router.post('/supplierscategory/archieved', suppliersCategoryController.archieved);

// router.post('/checkauth', userController.checkAuth);
// router.get("/userProfile/:id", checkAuth, userController.getUserProfileById);

module.exports = router;
