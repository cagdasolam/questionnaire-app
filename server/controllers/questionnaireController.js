import Questionnaire from "../models/questionnaireModel.js";
import mongoose from "mongoose";

const getQuestionnaires = async (req, res) => {
    try {
        const questionnaires = await Questionnaire.find().sort({ createdAt: -1 }).populate('questions');
        res.status(200).json(questionnaires);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const getQuestionnaireById = async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(404).json({ message: 'Questionnaire not found' });
        }
        const questionnaire = await Questionnaire.findById(req.params.id).populate('questions');
        if (!questionnaire) {
            return res.status(404).json({ message: 'Questionnaire not found' });
        }
        res.status(200).json(questionnaire);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const createQuestionnaire = async (req, res) => {
    try {
        const questionnaire = new Questionnaire(req.body);
        const result = await questionnaire.save();
        res.status(201).json(result);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const updateQuestionnaire = async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(404).json({ message: 'Questionnaire not found' });
        }
        const questionnaire = await Questionnaire.findByIdAndUpdate(
            req.params.id,
            {
                ...req.body
            },
            { new: true } // Return the updated questionnaire
        );

        if (!questionnaire) {
            return res.status(404).json({ message: 'Questionnaire not found' });
        }

        res.status(200).json(questionnaire);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const deleteQuestionnaire = async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(404).json({ message: 'Questionnaire not found' });
        }
        const questionnaire = await Questionnaire.findByIdAndDelete(req.params.id);

        if (!questionnaire) {
            return res.status(404).json({ message: 'Questionnaire not found' });
        }

        res.status(200).json({ message: 'Questionnaire deleted successfully' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

export {
    getQuestionnaires,
    getQuestionnaireById,
    createQuestionnaire,
    updateQuestionnaire,
    deleteQuestionnaire
};