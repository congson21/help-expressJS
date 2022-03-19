const express = require('express');  // require thư viện
const morgan = require('morgan');  // require thư viện
const handlebars = require('express-handlebars');
const path = require('path');
const route = require('./routers');
const database = require('./conflig/db');
const bodyParser = require("body-parser")
const app = express()  //express trả về 1 đối tượng app
const port = 3000
app.use(bodyParser.json())
app.use(express.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')));
//Connect DB
database.connect();

//HTTP logger
app.use(morgan('combined'))

//
app.use(express.urlencoded({  // gửi qua html
    extended: true
}));
app.use(express.json({// gửi từ code js
    extended: true
}));

//Temple engines
app.engine('hbs', handlebars.engine({
    extname: '.hbs',
    helpers: {
        sum: (a, b) => a + b,
    },
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

//router
route(app);

app.listen(port, () => { console.log(`http://localhost:${port}/home`) })
//app.listen(port, () => { console.log(`http://localhost:${port}/home`) })
