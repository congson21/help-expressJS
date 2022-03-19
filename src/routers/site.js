const express = require('express');
const router = express.Router();

const sitesController = require('../controller/SitesController');

// newsController.index
// router.use('/show/detail',newsController.detail)
router.use('/search',sitesController.search)
router.use('/location',sitesController.location)
router.use('/',sitesController.index)

module.exports = router;