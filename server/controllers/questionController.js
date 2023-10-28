import mongoose from "mongoose";
import Question from "../models/questionModel.js";

const getQuestions = async (req, res) => {
    try {
        const questions = await Question.find().sort({ createdAt: -1 });
        res.status(200).json(questions);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const getQuestionById = async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(404).json({ message: "Question not found" });
        }
        const question = await Question.findById(req.params.id);
        if (!question) {
            return res.status(404).json({ message: "Question not found" });
        }
        res.status(200).json(question);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const createQuestion = async (req, res) => {
    try {
        const question = new Question(req.body);
        console.log(question);
        const result = await question.save();
        res.status(201).json(result);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const updateQuestion = async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(404).json({ message: "Question not found" });
        }
        const question = await Question.findByIdAndUpdate(
            req.params.id,
            {
                ...req.body,
            },
            { new: true } // Return the updated question
        );

        if (!question) {
            return res.status(404).json({ message: "Question not found" });
        }

        res.status(200).json(question);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const deleteQuestion = async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(404).json({ message: "Question not found" });
        }
        const question = await Question.findByIdAndDelete(req.params.id);

        if (!question) {
            return res.status(404).json({ message: "Question not found" });
        }

        res.status(200).json({ message: "Question deleted successfully." });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

export {
    getQuestions,
    getQuestionById,
    createQuestion,
    updateQuestion,
    deleteQuestion,
};