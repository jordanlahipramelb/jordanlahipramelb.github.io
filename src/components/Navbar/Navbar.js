import { faHamburger, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import Resume from "../../assets/Resume.pdf";

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const handleClick = () => setNav(!nav); // sets nav true<>false

	return (
		<nav className="px-4">
			<div className="d-md-flex">
				<Link to="/">
					<p className="logo">JL</p>
				</Link>
			</div>

			{/* Menu */}
			<ul className="menu d-none d-md-flex">
				<Link to="/">HOME</Link>
				<Link to="/about">ABOUT</Link>
				<Link to="/skills">SKILLS</Link>
				<Link to="/projects">PROJECTS</Link>
				<Link to="/contact">CONTACT</Link>
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
			<ul onClick={handleClick} className={!nav ? "d-none" : "mobile-menu"}>
				<a href={Resume} download title="Download Resume" className="resume">
					RESUME
				</a>
				<Link to="/">HOME</Link>
				<Link to="/about">ABOUT</Link>
				<Link to="/skills">SKILLS</Link>
				<Link to="/projects">PROJECTS</Link>
				<Link to="/contact">CONTACT</Link>
			</ul>
		</nav>
	);
};

export default Navbar;
