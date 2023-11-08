import express from "express";
import {
    getQuestionnaires,
    getQuestionnaireById,
    createQuestionnaire,
    updateQuestionnaire,
    deleteQuestionnaire,
    submitAnswers
} from "../controllers/questionnaireController.js";

const router = express.Router();

router.get("/", getQuestionnaires);
router.get("/:id", getQuestionnaireById);
router.post('/', createQuestionnaire);
router.put('/:id', updateQuestionnaire);
router.patch('/:id', updateQuestionnaire);
router.delete('/:id', deleteQuestionnaire);

router.post('/:id/submit', submitAnswers);

export default router;


