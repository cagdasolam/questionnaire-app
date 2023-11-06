import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const About = () => {
	return (
		<div className="about-page">
			<div className="about-card">
				<h2>About This Project</h2>
				<p>
					This project, <strong>Questionnaire App</strong>, is a web application designed to create an interactive space for users to prepare and answer questionnaires. It was built using <strong>MERN</strong> tech stack.
				</p>
				<p>
					I hope you find this project useful, and we're open to any feedback or suggestions.
				</p>
				<div className='links'>
					<a href="https://github.com/cagdasolam/questionnaire-app" target="_blank" rel="noopener noreferrer">
						<FontAwesomeIcon icon={faGithub} /> GitHub
					</a>
					<a href="https://linkedin.com/in/cagdas-olam" target="_blank" rel="noopener noreferrer">
						<FontAwesomeIcon icon={faLinkedin} /> LinkedIn
					</a>
				</div>
			</div>
		</div>
	);
};

export default About;
