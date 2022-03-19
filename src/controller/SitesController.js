const axios = require('axios');
const { get } = require('express/lib/response');
const Courses = require('../models/Course')
class SitesController {
    //GET  /news
    index(req, res) {
        Courses.getAllCourses(function (error, result) {
            res.render('home', { result });
        })
    }
    //GET  /show
    search(req, res) {
        res.render('search');
    }

    // detail(req, res) {
    //     res.send("detail");
    // }

    location(req, res) {
        // //     // res.send("say hi");
        // //     // Courses.getLocation(function (error, result) {
        // //     //     console.log("test hi");
        // //     //     console.log(result);
        // //     //     res.render('location', { result });
        // //     // }
        // //     // )
        const result = Courses.getLocation()
        result.then(function (data) {
            console.log(data);
            res.render('location', { data })
        }
        ).catch(function (error) {
            console.log(error);
        })
    }
}

module.exports = new SitesController