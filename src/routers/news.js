const express = require('express');
const router = express.Router();

const newsController = require('../controller/NewsController');

// newsController.index
// router.use('/show/detail',newsController.detail)
router.use('/show',newsController.show)
router.use('/',newsController.index)

module.exports = router;