import React from "react";

import "./Header.scss";
import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Loader from "react-loaders";

const Header = () => {
	const [letterClass, setLetterClass] = useState("text-animate");

	// runs once
	// sets class names from 'text-animate' to 'text-animate-hover'
	// after 4 seconds in order to use animation for class
	useEffect(() => {
		setTimeout(() => {
			setLetterClass("text-animate-hover");
		}, 4000);
	}, []);

	return (
		<>
			<div className="header-wrapper">
				<div className="main-info">
					<h1>
						<span className="intro">
							<span className={letterClass}>H</span>
							<span className={`${letterClass} _11`}>i,</span>
							<span className={`${letterClass} _12`}> </span>

							<span className={`${letterClass} _13`}>m</span>
							<span className={`${letterClass} _14`}>y</span>
							<span className={`${letterClass} _15`}> </span>
							<span className={`${letterClass} _16`}>n</span>
							<span className={`${letterClass} _17`}>a</span>
							<span className={`${letterClass} _18`}>m</span>
							<span className={`${letterClass} _19`}>e</span>
							<span className={`${letterClass} _20`}> </span>
							<span className={`${letterClass} _21`}>i</span>
							<span className={`${letterClass} _22`}>s</span>
						</span>
						<br />
						<span className="name">
							<span className="text-animate-hover">J</span>
							<span className="text-animate-hover">o</span>
							<span className="text-animate-hover">r</span>
							<span className="text-animate-hover">d</span>
							<span className="text-animate-hover">a</span>
							<span className="text-animate-hover">n.</span>
						</span>
						<span className="text-animate-hover"> </span>

						<br />
						<span className="role">
							<span className="text-animate-hover">S</span>
							<span className="text-animate-hover">o</span>
							<span className="text-animate-hover">f</span>
							<span className="text-animate-hover">t</span>
							<span className="text-animate-hover">w</span>
							<span className="text-animate-hover">a</span>
							<span className="text-animate-hover">r</span>
							<span className="text-animate-hover">e</span>
							<span className="text-animate-hover"> </span>
							<span className="text-animate-hover">E</span>
							<span className="text-animate-hover">n</span>
							<span className="text-animate-hover">g</span>
							<span className="text-animate-hover">i</span>
							<span className="text-animate-hover">n</span>
							<span className="text-animate-hover">e</span>
							<span className="text-animate-hover">e</span>
							<span className="text-animate-hover">r.</span>
						</span>
					</h1>
					<p>
						Specialized in creating high quality websites with modern web
						technologies.
					</p>
					<a href="/contact" className="flat-button">
						CONTACT
					</a>
				</div>
			</div>
			<Footer className={"fixed-bottom"} />
			<Loader type="pacman" />
		</>
	);
};

export default Header;
