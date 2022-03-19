const express = require('express');
const router = express.Router();

const coursesController = require('../controller/CoursesController');

// newsController.index
// router.use('/show/detail',newsController.detail)
router.get('/create',coursesController.create)
router.post('/addCourse',coursesController.addCourse)
router.post('/:id/updateCourse',coursesController.updateCourse)
router.get('/:id/edit',coursesController.edit)
router.get('/:id/delete',coursesController.delete)
router.get('/:slug',coursesController.show)


module.exports = router;