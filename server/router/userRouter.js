import {
	register,
	login
} from "../controllers/userController.js";

const express = require('express');
const router = express.Router();
const User = require('../models/User');


router.post('/register', register);

router.post('/login', login);

export default router;