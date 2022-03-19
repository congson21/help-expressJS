
const mysql = require('mysql');
function connect() {
  return new Promise(function (resolve, reject) {
    const conn = mysql.createConnection({
      database: 'express_db',
      host: "localhost",
      user: "root",
      password: "123456"
    });

    conn.connect(function (err) {
      if (err) reject(err);
      console.log("Connected!");
      resolve(conn)
    });
  })
}
module.exports = {connect};