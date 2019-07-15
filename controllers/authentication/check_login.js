const express = require('express');
const router = express.Router();
var jwt = require('jsonwebtoken');

const User = require('./../../models/user.model');

router.post('/login', (req, res) => {

    let username = req.body.userEmail;
    let password = req.body.userPassword;

    User.checkLogin(username, password)
        .then((data) => {

            if (data && data.length > 0) {
                let user_id = data[0].user_id;
                let user_name = data[0].username;

                let token = jwt.sign({ user_id: user_id, user_name: user_name }, 'key-13579');

                res.status(200).send({ 'status': 1, 'message': 'Login successful.', 'data': { 'token': token } });
            }
            else {
                res.status(401).send({ 'status': 0, 'message': 'Login unsuccessful. Please check your username and password.' });
            }

        }).catch((err) => {

            res.status(500).send({ 'status': 0, 'message': err });

        });
});

module.exports = router;