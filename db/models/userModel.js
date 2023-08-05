const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

const userSchema = new Schema(
	{
		name: { type: String, required: true },
		email: { type: String, required: true },
		password: { type: String, required: true },
		token: { type: String },
		avatar: { type: String },
	},
	{ versionKey: false }
);

userSchema.methods.hashPassword = async function (password) {
	this.password = await bcrypt.hash(password, 10);
};

userSchema.methods.comparePassword = async function (password) {
	return await bcrypt.compare(password, this.password);
};

const User = mongoose.model("user", userSchema);

module.exports = User;
