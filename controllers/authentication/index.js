const express = require('express');
const router = express.Router();

router.use('', require('./check_login'));

module.exports = router;