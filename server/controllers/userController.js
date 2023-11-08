import mongoose from "mongoose";
import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const register = async (req, res) => {
	const { username, email, password } = req.body;

	const usernameExists = await User.findOne({ username });
	if (usernameExists) {
		console.log("usernameExists");
		return res.status(400).json({ error: 'Username is already taken' });
	}

	// Check if email is already taken
	const emailExists = await User.findOne({ email });
	if (emailExists) {
		return res.status(400).json({ error: 'Email is already taken' });
	}

	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(password, salt);
	const user = new User({
		username: username,
		email: email,
		password: hashedPassword
	});
	try {
		const savedUser = await user.save();
		const token = jwt.sign({ _id: savedUser._id }, process.env.TOKEN_SECRET, { expiresIn: '1h' });
		res.setHeader('Authorization', `Bearer ${token}`);
		res.status(200).json({ token: `Bearer ${token}` });
	} catch (err) {
		res.status(400).send(err);
	}
};

const login = async (req, res) => {
	const user = await User.findOne({ email: req.body.email });
	if (!user) return res.status(400).send('Email not found');

	const validPassword = await bcrypt.compare(req.body.password, user.password);
	if (!validPassword) return res.status(400).send('Invalid password');

	const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET, { expiresIn: '1h' });
	res.setHeader('Authorization', `Bearer ${token}`);
	res.status(200).json({ token: `Bearer ${token}` });
	// console.log(res);
	// console.log(res.header['auth-token']);
};

export { register, login };