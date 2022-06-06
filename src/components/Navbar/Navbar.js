import { faHamburger, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Navbar.scss";
import { Link } from "react-scroll";
import { useState } from "react";
import Resume from "../../assets/Resume.pdf";

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const handleClick = () => setNav(!nav); // sets nav true<>false

	return (
		<nav className="fixed-top px-4">
			<div className="d-md-flex">
				<p className="logo">JL</p>
			</div>

			{/* Menu */}
			<ul className="menu d-none d-md-flex">
				<Link to="home" spy={true} smooth={true} offset={50}>
					HOME
				</Link>
				<Link to="about" spy={true} smooth={true} offset={50}>
					ABOUT
				</Link>
				<Link to="skills" spy={true} smooth={true} offset={50} duration={500}>
					SKILLS
				</Link>
				<Link
					to="projects"
					spy={true}
					smooth={true}
					offset={-50}
					duration={500}
				>
					PROJECTS
				</Link>
				<Link to="contact" spy={true} smooth={true} offset={50} duration={500}>
					CONTACT
				</Link>
				<a href={Resume} download title="Download Resume" className="resume">
					RESUME
				</a>
			</ul>

			{/* Hamburger */}
			<div onClick={handleClick} className="hamburger d-md-none">
				{!nav ? (
					<FontAwesomeIcon icon={faHamburger} color={"#FFF"} size="xl" />
				) : (
					<FontAwesomeIcon icon={faX} color={"#FFF"} size="xl" />
				)}
			</div>

			{/* Mobile Menu */}
			<ul className={!nav ? "d-none" : "mobile-menu"}>
				<a href={Resume} download title="Download Resume" className="resume">
					RESUME
				</a>
				<Link
					to="home"
					onClick={handleClick}
					spy={true}
					smooth={true}
					duration={500}
				>
					HOME
				</Link>
				<Link
					to="about"
					onClick={handleClick}
					spy={true}
					smooth={true}
					duration={500}
				>
					ABOUT
				</Link>
				<Link
					to="skills"
					onClick={handleClick}
					spy={true}
					smooth={true}
					duration={500}
				>
					SKILLS
				</Link>
				<Link
					to="projects"
					onClick={handleClick}
					spy={true}
					smooth={true}
					offset={-350}
					duration={500}
				>
					PROJECTS
				</Link>
				<Link
					to="contact"
					onClick={handleClick}
					spy={true}
					smooth={true}
					duration={500}
				>
					CONTACT
				</Link>
			</ul>
		</nav>
	);
};

export default Navbar;
