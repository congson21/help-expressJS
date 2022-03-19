const Courses = require('../models/Course')
class MeController {

    //GET  /me/stored/courses
    storedCourses(req, res) {
        Courses.getAllCourses(function (error, result) {
            res.render('stored-courses',{ result });
            // res.json(result);       
        }, req.params.slug)
       
    }
}

module.exports = new MeController