import {
	faGithub,
	faLinkedin,
	faSkype,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Footer.scss";
import Resume from "../../assets/Resume.pdf";

function Footer({ className }) {
	return (
		<footer className={`footer ${className}`}>
			<div className="container">
				<div className="footer-social-links">
					<a
						target="_blank"
						rel="noreferrer"
						href="https://www.linkedin.com/in/jordan-lahip-ramelb/"
					>
						<FontAwesomeIcon icon={faLinkedin} color="#fff" />
					</a>

					<a
						target="_blank"
						rel="noreferrer"
						href="https://github.com/jordanlahipramelb"
					>
						<FontAwesomeIcon icon={faGithub} color="#fff" />
					</a>

					<a
						target="_blank"
						rel="noreferrer"
						href="skype:live:.cid.6cf969f378e9b68c"
					>
						<FontAwesomeIcon icon={faSkype} color="#fff" />
					</a>
					<a target="_blank" rel="noreferrer" href="/contact">
						<FontAwesomeIcon icon={faEnvelope} color="#fff" />
					</a>

					<a href={Resume} download title="Download Resume">
						<FontAwesomeIcon icon={faFileAlt} color="#fff" />
					</a>
				</div>
				<div className="footer-text">
					<p>Built By Jordan Lahip-Ramelb • © 2022</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
