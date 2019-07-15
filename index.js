const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Enable CORS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Define all index controllers for the modules
const authentication_controller = require('./controllers/authentication/index.js');

app.get('/api/v1', (req, res) => res.send('Hello World!'));

// Central routs for the modules
app.use('/api/v1/authentication', authentication_controller);

app.listen(port, () => console.log(`Application listening on port ${port}!`));