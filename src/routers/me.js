const express = require('express');
const router = express.Router();

const meController = require('../controller/MeController');

// newsController.index
// router.use('/show/detail',newsController.detail)
router.get('/stored/courses',meController.storedCourses)

module.exports = router;