import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import { useState, useEffect, useRef } from "react";
import "./Projects.scss";
import fitnessImg from "../../assets/images/thefitnessjourney.png";
import bowlingImg from "../../assets/images/bowlingmvp.png";
import HTML from "../../assets/images/html.png";
import CSS from "../../assets/images/css.png";
import Bootstrap from "../../assets/images/bootstrap.svg";
import Sass from "../../assets/images/sass.png";
import JavaScript from "../../assets/images/javascript.png";
import ReactImg from "../../assets/images/react.png";
import ReduxImg from "../../assets/images/redux.svg";
import Node from "../../assets/images/node.png";
import Express from "../../assets/images/express.png";
import Python from "../../assets/images/python.png";
import Flask from "../../assets/images/flask.png";
import PostgreSQL from "../../assets/images/postgresql.png";
import SQLA from "../../assets/images/sqla.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBowlingBall, faDumbbell } from "@fortawesome/free-solid-svg-icons";
import Footer from "../Footer/Footer";

const Projects = () => {
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
			<div className="projects-page pt-2 pt-sm-3 pt-md-2">
				<div className="container">
					<div className="row">
						<p className="title">
							<AnimatedLetters
								letterClass={letterClass}
								strArr={["P", "r", "o", "j", "e", "c", "t", "s"]}
								idx={12}
							/>
						</p>
					</div>

					<div className="description">
						<div className="row">
							<p>Check out some of my recent work.</p>
						</div>
					</div>

					<div className="projects">
						<div className="row row-cols-1 row-cols-sm-1 row-cols-md-2">
							<div className="col">
								<div className="card">
									<a
										href="https://thefitnessjourney.herokuapp.com/"
										target="_blank"
									>
										<img
											src={fitnessImg}
											className="card-img-top"
											alt="The Fitness Journey Screenshot"
										/>
									</a>
									<div className="card-body">
										<h5 className="card-title">
											<FontAwesomeIcon icon={faDumbbell} /> The Fitness Journey
										</h5>
										<p className="card-text">
											A fitness tracker/blog that allows users to create/log
											workout routines, learn how to perform a variety of
											exercises, and ask questions/search topics via forum
											system.
										</p>
										<div className="btn-group" role="group">
											<a
												href="https://github.com/jordanlahipramelb/the-fitness-journey"
												target="_blank"
											>
												<button type="button" className="btn btn-outline-info">
													GitHub
												</button>
											</a>
											<a
												href="https://thefitnessjourney.herokuapp.com/"
												target="_blank"
											>
												<button type="button" className="btn btn-outline-info">
													Demo
												</button>
											</a>
										</div>
										<br />
										<br />
										<p className="text-muted">
											Project is hosted on Heroku. Please allow a couple of
											minutes for application to load.
										</p>

										<div className="card-footer">
											<img src={HTML} alt="HTML" />
											<img src={JavaScript} alt="JavaScript" />
											<img src={CSS} alt="CSS" />
											<img src={Bootstrap} alt="Bootstrap" />
											<img src={ReactImg} alt="React" />
											<img src={Node} alt="Node" />
											<img src={Express} alt="Express" />
											<img src={PostgreSQL} alt="PostgreSQL" />
										</div>
									</div>
								</div>
							</div>
							<div className="col">
								<div className="card">
									<a href="https://bowling-mvp.herokuapp.com/" target="_blank">
										<img
											src={bowlingImg}
											className="card-img-top"
											alt="Bowling MVP Screenshot"
										/>
									</a>
									<div className="card-body">
										<h5 className="card-title">
											<FontAwesomeIcon icon={faBowlingBall} /> Bowling MVP
										</h5>
										<p className="card-text">
											Web application that allows authenticated users to track
											each game of bowling and share their scores with one
											another, create leagues/teams, setting a schedule of which
											teams are competing with one another on each league, and
											searching for nearby bowling alleys.
										</p>

										<div className="btn-group" role="group">
											<a
												href="https://github.com/jordanlahipramelb/bowling-mvp"
												target="_blank"
											>
												<button type="button" className="btn btn-outline-info">
													GitHub
												</button>
											</a>
											<a
												href="https://bowling-mvp.herokuapp.com/"
												target="_blank"
											>
												<button type="button" className="btn btn-outline-info">
													Demo
												</button>
											</a>
										</div>
										<br />
										<br />
										<small className="text-muted">
											Project is hosted on Heroku. Please allow a couple of
											minutes for application to load.
										</small>

										<div className="card-footer">
											<img src={HTML} alt="HTML" />
											<img src={JavaScript} alt="JavaScript" />
											<img src={CSS} alt="CSS" />
											<img src={Bootstrap} alt="Bootstrap" />
											<img src={Python} alt="Python" />
											<img src={Flask} alt="Flask" />
											<img src={PostgreSQL} alt="PostgreSQL" />
											<img src={SQLA} alt="SQLAlchemy" />
										</div>
									</div>
								</div>
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

export default Projects;
