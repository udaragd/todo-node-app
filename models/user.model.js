var db = require('./../config/db.js'); // Database connection 

const userModel = {};

userModel.checkLogin = (username, password) => {
    return new Promise((resolve, reject) => {

        let query = "SELECT * FROM tbl_user AS u WHERE u.email = '" + username + "' AND u.password =  '" + password + "'";

        db.query(query, function (error, result) {
            (error) ? reject('Databse error. Please contact your system admin.') : resolve(result);
        });

    });
}

module.exports = userModel;