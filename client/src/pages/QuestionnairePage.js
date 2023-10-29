import { useEffect, useState, React } from "react";
import { useParams } from 'react-router-dom'
import axios from "axios";

const QuestionnairePage = () => {

	const { id } = useParams();
	const [questionnaire, setQuestionnaire] = useState({});

	useEffect(() => {
		axios.get("http://localhost:4000/api/questionnaires/" + id)
			.then(res => {
				setQuestionnaire(res.data);
				console.log(res.data);
			})
			.catch(err => {
				console.log(err);
			});
	}, [id]);

	console.log(questionnaire);

	return (
		<div className="questionnaire">
			<div className="container">
				<div className="q-title">
					<h2>{questionnaire.title}</h2>
				</div>
				<div className="q-description">
					<p>{questionnaire.description}</p>
				</div>
			</div>
			<div className="q-questions">
				{questionnaire.questions && questionnaire.questions.map((question, key) => (
					<div key={key} className="q-question">
						<div className="q-question-text">
							<h3>{question.text}</h3>
						</div>
						<div className="q-question-options">
							{question.options && question.options.map((option, optionKey) => (
								<div key={optionKey} className="option" id={optionKey}>
									<input type="radio" id={optionKey} name={question.text} value={option.text} />
									<label htmlFor={option.text}>{option.text}</label>
								</div>
							))}
						</div>
					</div>
				))}

			</div>
		</div>
	);
};
export default QuestionnairePage