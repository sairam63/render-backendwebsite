// models/contactUs.model.js
const mongoose = require('../config/db.config');

const contactUsSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  name: { type: String, required: true, minlength: 3, maxlength: 30 },
  phoneNumber: { type: String, required: true, match: /^[0-9]{10}$/ },
  email: { type: String, match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
  service: { type: String, required: true },
  message: { type: String, minlength: 0, maxlength: 500 },
});

contactUsSchema.virtual('humanReadableDate').get(function() {
  return this.date.toLocaleString();
});

contactUsSchema.set('toJSON', {
  virtuals: true,
  transform: function(doc, ret) {
    ret.date = ret.humanReadableDate;
    delete ret.humanReadableDate;
    return ret;
  },
});

const ContactUs = mongoose.model('ContactUs', contactUsSchema);

module.exports = ContactUs;
