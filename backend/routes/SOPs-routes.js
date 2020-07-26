const express = require('express');
const router = express.Router();
const sopsController = require('../controllers/SOPs-controller');

// Super SOPs Login
// router.post('/super-SOPs-login', sopsController.superSOPsLogin);

// Create SOPs
router.post('/create', sopsController.createSOPs);

// SOPs by ID
router.post('/delete', sopsController.deleteSOPs);

// SOPs get
router.post('/get', sopsController.getSOPs);

// SOPs update
router.post('/update', sopsController.updateSOPs);

//  update
router.post('/archieved', sopsController.archieved);

// SOPS update with Category Name
router.post('/categoryIDs/update', sopsController.updateSOPsWithCateogrIDs);

router.post('/reponsibility/update', sopsController.updateSOPsResponsibility);
router.post('/adminstrative/update', sopsController.updateSOPsAdminstrative);
router.post('/requirment/update', sopsController.updateSOPsRequirment);
router.post('/process/update', sopsController.updateSOPsPorcess);
router.post('/compeletion/update', sopsController.updateSOPsCompeletion);

// router.post('/checkauth', sopsController.checkAuth);
// router.get("/SOPsProfile/:id", checkAuth, sopsController.getSOPsProfileById);

module.exports = router;
