const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const contactSchema = new Schema(
	{
		name: { type: String, required: true },
		number: { type: String, required: true },
	},
	{ versionKey: false }
); 

const Contact = mongoose.model('contact', contactSchema);

module.exports = Contact;
