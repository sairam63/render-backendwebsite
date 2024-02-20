// controllers/contactUs.controller.js
const ContactUs = require('../models/contactUs.model');

async function submitContactForm(req, res) {
  try {
    const { name, phoneNumber, email, service, message } = req.body;

    const newContact = new ContactUs({
      name: name,
      phoneNumber: phoneNumber,
      email: email,
      service: service,
      message: message,
    });

    const savedContact = await newContact.save();

    res.status(201).json(savedContact);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  submitContactForm,
};
