const express = require('express');
const router = express.Router();
const companyListController = require('../controllers/companyList-controller');

// Create a Company
router.post('/create', companyListController.createCompany);

// Get Company 
router.post('/get', companyListController.getCompanyList);

// Update COmpany
router.post("/update", companyListController.updateCompany)

//  update
router.post('/archieved', companyListController.archieved);

// Delete Company by Id
router.post("/delete", companyListController.deleteComapny)

module.exports = router;
