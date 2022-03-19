const Courses = require('../models/Course')
class NewsController {
    //GET  /news
    index(req, res) {
        res.render('news');
    }
    //GET  /show
    show(req, res) {
        res.render('show');
    }

    // detail(req, res) {
    //     res.send("detail");
    // }
}

module.exports = new NewsController