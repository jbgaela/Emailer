const express = require('express');

const { sendEmail } = require('../Controllers/sendMailController');

const router = express.Router();

router.route('/').post(sendEmail);

module.exports = router;
