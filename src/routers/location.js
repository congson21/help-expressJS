const express = require('express');
const router = express.Router();
const locationController = require('../controller/LocationController');
const accuController = require('../models/Location');

router.get('/show-detail',locationController.showDetail)
router.get('/get-accu', accuController.getLocation)
// router.post('/get',locationController.getLocation)

module.exports = router;