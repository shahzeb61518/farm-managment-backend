const express = require('express');
const router = express.Router();
const sopsController = require('../controllers/SOPs-controller');

// Super SOPs Login
// router.post('/super-SOPs-login', sopsController.superSOPsLogin);

// Create SOPs
router.post('/create', sopsController.createSOPs);

// SOPs by ID
router.post('/delete', sopsController.deleteSOPs);

// SOPs update
router.post('/get', sopsController.getSOPs);

// router.post('/checkauth', sopsController.checkAuth);
// router.get("/SOPsProfile/:id", checkAuth, sopsController.getSOPsProfileById);

module.exports = router;
