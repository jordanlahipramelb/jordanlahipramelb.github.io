import React from "react";
import AOS from "aos";
import "./Header.scss";
import { useEffect } from "react";
// import Loader from "react-loaders";

const Header = () => {
	useEffect(() => {
		AOS.init({ duration: 2000, once: true });
	}, []);

	return (
		<>
			<div name="home" className="header-page">
				<div className="container">
					<div className="main-info" data-aos="fade-up" data-aos-delay="200">
						<h1>
							<span className="intro">
								<span className="text-animate-hover">H</span>
								<span className="text-animate-hover">i,</span>
								<span> </span>

								<span className="text-animate-hover">m</span>
								<span className="text-animate-hover">y</span>
								<span className="text-animate-hover"> </span>
								<span className="text-animate-hover">n</span>
								<span className="text-animate-hover">a</span>
								<span className="text-animate-hover">m</span>
								<span className="text-animate-hover">e</span>
								<span className="text-animate-hover"> </span>
								<span className="text-animate-hover">i</span>
								<span className="text-animate-hover">s</span>
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
							<span> </span>

							<span className="role d-block">
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
					</div>
					<div data-aos="fade-up" data-aos-delay="250">
						<p>
							Specialized in creating high quality websites with modern web
							technologies.
						</p>

						<a href="/contact" className="flat-button">
							CONTACT
						</a>
					</div>
				</div>
			</div>
			{/* <Loader type="pacman" /> */}
		</>
	);
};

export default Header;
