const newRouter = require('./news')
const meRouter = require('./me')
const siteRouter = require('./site')
const courseRouter = require('./course')
const locationRouter = require('./location')
function route(app){
    app.use('/news', newRouter)
    // app.get('/', (req, res) => {
    //     //return res.send('123')
    //     res.render('home');
    // })
    app.use('/me', meRouter)
    app.use('/home', siteRouter)
    // app.use('/search', siteRouter)
    app.use('/location', locationRouter)
    // app.get('/search', (req, res) => {
    //     res.render('search');
    // })
    app.use('/course', courseRouter)
}

module.exports = route;