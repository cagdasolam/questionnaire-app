import express from "express";
import dotenv from 'dotenv';
import questionRouter from "./router/questionRouter.js";
import questionnaireRouter from "./router/questionnaireRouter.js";
import mongoose from "mongoose";

dotenv.config();

// express app
const app = express();

// middleware
app.use(express.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    console.log(req.method, req.path, res.statusCode);
    next();
})

// routes
app.use('/api/questions', questionRouter)
app.use('/api/questionnaires', questionnaireRouter)


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

