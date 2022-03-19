const res = require('express/lib/response');
const Courses = require('../models/Course')

class CoursesController {
    //GET  /show
    show(req, res) {
        Courses.getCourse(function (error, course) {
            res.render('courseDetail', { course });
            // res.json(result);       
        }, req.params.slug)
    }

    create(req, res) {
        res.render('courseCreate');
    }

    addCourse(req, res) {
        // res.json(req.body);
        Courses.addCourse(req.body);
        res.redirect("/home");
    }

    edit(req, res) {
        Courses.getCourseById(function (error, course) {
            res.render('courseEdit', { course });
            // res.json(result);       
        }, req.params.id)
    }

    updateCourse(req, res) {
        const formData = {
            ...req.body,
            course_id: req.params.id
        }
        Courses.updateCourse(formData);
        setTimeout(() => { res.redirect("/me/stored/courses"); }, 1000)
    }

    delete(req, res) {
        Courses.deleteCourseById(req.params.id)
        setTimeout(() => { res.redirect("/me/stored/courses"); }, 1000)
    }
}

module.exports = new CoursesController