const db = require('../conflig/db');
const axios = require('axios');

function getAllCourses(result) {
    db.connect().then(function (connect) {
        connect.query('SELECT * FROM courses', function (error, results, fields) {
            if (!error) {
                result(null, results);
            } else {
                result(null, error);
            }
        });
    })
}

function getCourse(result, param) {
    db.connect().then(function (connect) {
        connect.query('SELECT * FROM courses where slug = ?', param, function (error, results, fields) {
            if (!error) {
                result(null, results);
            } else {
                result(null, error);
            }
        });
    })
}

function getCourseById(result, param) {
    db.connect().then(function (connect) {
        connect.query('SELECT * FROM courses where course_id = ?', param, function (error, results, fields) {
            if (!error) {
                result(null, results);
            } else {
                result(null, error);
            }
        });
    })
}

function addCourse(param) {
    const course_name = param.course_name;
    const description = param.description;
    const img = param.img;
    const slug = course_name + Math.random();
    db.connect().then(function (connect) {
        connect.query("INSERT INTO courses (course_name, description, img, slug) VALUES (?,?,?,?)", [course_name, description, img, slug], function (error, results, fields) {
            if (error) {
                return false;
            }
            else {
                return true;
            }
        });
    })
}

function deleteCourseById(param) {
    db.connect().then(function (connect) {
        connect.query('DELETE FROM courses WHERE course_id = ?', param, function (error, results, fields) {
            // if (!error) {
            //     result(null, results);
            // } else {
            //     result(null, error);
            // }
        });
    })
}

function updateCourse(param) {
    const course_id = param.course_id;
    const course_name = param.course_name;
    const description = param.description;
    db.connect().then(function (connect) {
        connect.query("UPDATE courses SET course_name = ?, description = ? WHERE course_id = ?", [course_name, description, course_id], function (error, results, fields) {
            // if (!error) {
            //     result(null, results);
            // } else {
            //     result(null, error);
            // }
        });
    })
}

async function getLocation() {
    try {
        const response = await axios.get('http://dataservice.accuweather.com/locations/v1/353412?apikey=bnBb0c3hovnFeBVrVcm0XOWaTXkbePW5')
        return response.data;
    } catch (error) {
        console.log(error);
    }
}


module.exports = { getAllCourses, getCourse, addCourse, deleteCourseById, getCourseById, updateCourse, getLocation }