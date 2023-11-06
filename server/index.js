import express from "express";
import dotenv from 'dotenv';
import questionRouter from "./router/questionRouter.js";
import questionnaireRouter from "./router/questionnaireRouter.js";
import userRouter from "./router/userRouter.js";
import mongoose from "mongoose";
import cors from "cors";

dotenv.config();

// express app
const app = express();

// middleware
app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
	console.log(req.method, req.path, res.statusCode);
	next();
})

// routes
app.use('/api/questions', questionRouter)
app.use('/api/questionnaires', questionnaireRouter)
app.use('/api', userRouter)


mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
	.then((result) => {
		// listen for requests
		app.listen(process.env.PORT, () => {
			console.log('Server is running on port ' + process.env.PORT + '...')
		});
	})
	.catch((err) => {
		console.log(err)
	})

