import { useState, useEffect } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./About.scss";
import Footer from "../Footer/Footer";

const About = () => {
	const [letterClass, setLetterClass] = useState("text-animate");

	// runs once
	// sets class names from 'text-animate' to 'text-animate-hover'
	// after 4 seconds in order to use animation for class
	useEffect(() => {
		setTimeout(() => {
			setLetterClass("text-animate-hover");
		}, 3000);
	}, []);

	return (
		<>
			<div className="about-page pt-2 pt-sm-3 pt-md-5">
				<div className="container">
					<div className="row">
						<p className="title">
							<AnimatedLetters
								letterClass={letterClass}
								strArr={["A", "b", "o", "u", "t", " ", "m", "e"]}
								idx={14}
							/>
						</p>
					</div>

					<div className="description">
						<div className="row">
							<div className=" col-xs-12 col-sm-6">
								<p className="intro">Hi! I'm Jordan, nice to meet you.</p>
							</div>
							<div className=" col-xs-12 col-sm-6">
								<p>
									I am a software engineer currently working in the healthcare
									field. This has helped me build a strong foundation of soft
									skills relating to communication, teamwork, time-management,
									and more. I document patients' progress utilizing the EMR
									system as well as creating home exercise programs using a web
									application.
								</p>
								<p>
									Growing up, I always loved tech. I decided to take a leap and
									train in modern app development at Springboard, completing
									both their prep program and Software Engineering Career Track,
									resulting in a strong foundation in software development and
									programming principles.
								</p>

								<p>
									I love challenges and am constantly searching for ways to
									improve myself. I'm searching for an organization that I can
									help develop, grow, and expand my skills with the latest
									technologies.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
			<Loader type="pacman" />
		</>
	);
};

export default About;
