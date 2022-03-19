const Location = require('../models/Location')
class LocationController {

    //GET  /location/show-detail
    showDetail(req, res) {
            const result = Location.getLocation()
            result.then(function (data) {
                res.render('showLocation', { data })
            }
            ).catch(function (error) {
                console.log(error);
            })
        }
}

module.exports = new LocationController