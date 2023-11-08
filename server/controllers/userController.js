import mongoose from "mongoose";
import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const register = async (req, res) => {
	const { username, email, password } = req.body;
	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(password, salt);
	const user = new User({
		username: username,
		email: email,
		password: hashedPassword
	});
	try {
		const savedUser = await user.save();
		const token = jwt.sign({ _id: savedUser._id }, process.env.TOKEN_SECRET);
		res.header('auth-token', token).send(token);
	} catch (err) {
		res.status(400).send(err);
	}
};

const login = async (req, res) => {
	const user = await User.findOne({ email: req.body.email });
	if (!user) return res.status(400).send('Email not found');

	const validPassword = await bcrypt.compare(req.body.password, user.password);
	if (!validPassword) return res.status(400).send('Invalid password');

	const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
	res.header('auth-token', token).send(token);
};

export { register, login };