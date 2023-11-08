import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './styles/qCard.css';


const QuesrtionnaireCard = ({ questionnaire }, key) => {

	const [expandedCards, setExpandedCards] = useState({});


	const toggleCardExpansion = (key) => {
		setExpandedCards(prevState => ({
			...prevState,
			[key]: !prevState[key]
		}));
	};


	return (
		<div key={key} className={`q-card ${expandedCards[key] ? 'expanded' : ''}`}>
			<div className="q-title">
				<h2>{questionnaire.title}</h2>
			</div>
			<div className="q-description">
				<div className="limited-description">
					<p>{!expandedCards[key] && questionnaire.description.length > 100
						? questionnaire.description.slice(0, 100) + '...'
						: questionnaire.description
					}
						<div className="q-card-buttons">
							<Link to={`/questionnaires/${questionnaire._id}`}>
								<button className="view-questionnaire-button">View Questionnaire</button>
							</Link>
							{questionnaire.description.length > 100 && (
								<button className="read-more-button" onClick={() => toggleCardExpansion(key)}>
									{expandedCards[key] ? 'See Less' : 'See More'}
								</button>
							)}

						</div>

					</p>
				</div>

				<p>Number of questions: {questionnaire.questions.length}</p>
			</div>
		</div>
	);
}


export default QuesrtionnaireCard;