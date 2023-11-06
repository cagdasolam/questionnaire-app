import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
	return (
		<footer className="footer">
			<div className="container">
				<p>&copy; {new Date().getFullYear()} Çağdaş Olam</p>
				<div className='links'>
					<a href="https://github.com/cagdasolam/questionnaire-app" target="_blank" rel="noopener noreferrer">
						<FontAwesomeIcon icon={faGithub} /> GitHub
					</a>
					<a href="https://linkedin.com/in/cagdas-olam" target="_blank" rel="noopener noreferrer">
						<FontAwesomeIcon icon={faLinkedin} /> LinkedIn
					</a>
				</div>
			</div>
		</footer>
	);
}

export default Footer;