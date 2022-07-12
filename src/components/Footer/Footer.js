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

function Footer() {
	return (
		<footer className="footer">
			<div className="container">
				<div className="footer-text">
					<p>Built By Jordan Lahip-Ramelb • © 2022</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
