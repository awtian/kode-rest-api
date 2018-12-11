const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema({
  name: String,
  phone: String,
  company: String,
  active: Boolean
})

const Contact = mongoose.model('Contact', contactSchema)

module.exports = Contact