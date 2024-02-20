// routes/contactUs.routes.js
const express = require('express');
const router = express.Router();
const contactUsController = require('../controllers/contactUs.controller');

router.post('/submit', contactUsController.submitContactForm);

module.exports = router;
