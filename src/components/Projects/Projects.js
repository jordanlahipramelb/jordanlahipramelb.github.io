import { useEffect } from "react";
import "./Projects.scss";
import fitnessImg from "../../assets/images/thefitnessjourney.png";
import bowlingImg from "../../assets/images/bowlingmvp.png";
import tbbcImg from "../../assets/images/tbbc.png";
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
import Nextjs from "../../assets/images/nextjs.png";
import Sanity from "../../assets/images/sanity.png";
import Stripe from "../../assets/images/stripe.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBowlingBall,
	faDumbbell,
	faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import Card from "./Card/Card";

const Projects = () => {
	useEffect(() => {
		AOS.init({ duration: 2000, once: true });
	}, []);

	return (
		<>
			<div name="projects" className="projects-page px-4 px-sm-5 px-md-4">
				<div className="container">
					<div className="row">
						<p className="title" data-aos="fade-up" data-aos-delay="40">
							<span className="text-animate-hover">P</span>
							<span className="text-animate-hover">r</span>
							<span className="text-animate-hover">o</span>
							<span className="text-animate-hover">j</span>
							<span className="text-animate-hover">e</span>
							<span className="text-animate-hover">c</span>
							<span className="text-animate-hover">t</span>
							<span className="text-animate-hover">s</span>
						</p>
					</div>

					<div className="description pb-3">
						<div className="row">
							<p data-aos="fade-up" data-aos-offset="200" data-aos-delay="50">
								Check out some of my recent work.
							</p>
						</div>
					</div>

					<div className="projects">
						<div className="row row-cols-1 row-cols-sm-1 row-cols-md-2">
							<div className="col">
								<Card
									linkDemo={"https://thefitnessjourney.herokuapp.com/"}
									linkGithub={
										"https://github.com/jordanlahipramelb/the-fitness-journey"
									}
									iconTitleImg={faDumbbell}
									title={"The Fitness Journey"}
									description={
										"A fitness tracker/blog that allows users to create/log workout routines, learn how to perform a variety of exercises, and ask questions/search topics via forum system."
									}
									smallText={
										"	Project is hosted on Heroku. Please allow a couple of minutes for application to load."
									}
									screenshotImg={fitnessImg}
									technologies={[
										{ icon: HTML, title: "HTML" },
										{ icon: JavaScript, title: "Javascript" },
										{ icon: CSS, title: "CSS" },
										{ icon: Bootstrap, title: "Bootstrap" },
										{ icon: ReactImg, title: "ReactJS" },
										{ icon: Node, title: "NodeJS" },
										{ icon: Express, title: "ExpressJS" },
										{ icon: PostgreSQL, title: "PostgreSQL" },
									]}
								/>
							</div>
							<div className="col">
								<Card
									linkDemo={"https://bowling-mvp.herokuapp.com/"}
									linkGithub={
										"https://github.com/jordanlahipramelb/bowling-mvp"
									}
									screenshotImg={bowlingImg}
									iconTitleImg={faBowlingBall}
									title={"Bowling MVP"}
									description={
										"Web application that allows authenticated users to track each game of bowling and share their scores with one another, create leagues/teams, setting a schedule of which teams are competing with one another on each league, and searching for nearby bowling alleys."
									}
									smallText={
										"	Project is hosted on Heroku. Please allow a couple of minutes for application to load."
									}
									technologies={[
										{ icon: HTML, title: "HTML" },
										{ icon: JavaScript, title: "Javascript" },
										{ icon: CSS, title: "CSS" },
										{ icon: Bootstrap, title: "Bootstrap" },
										{ icon: Python, title: "Python" },
										{ icon: Flask, title: "Flask" },
										{ icon: SQLA, title: "SQLAlchemy" },
										{ icon: PostgreSQL, title: "PostgreSQL" },
									]}
								/>
							</div>
							<div className="col">
								<Card
									linkDemo={"https://thiccboyzbowlingclub-shop.vercel.app/"}
									linkGithub={
										"https://github.com/jordanlahipramelb/thiccboyz-ecommerce"
									}
									iconTitleImg={faShoppingBag}
									screenshotImg={tbbcImg}
									title={"Thicc Boyz eCommerce"}
									description={
										"ECommerce website that allows users to navigate through its products and add/remove these products from their cart. Furthermore, the user is able to complete checkout with the integration of Stripe. These products were inspired by my bowling team."
									}
									technologies={[
										{ icon: HTML, title: "HTML" },
										{ icon: JavaScript, title: "Javascript" },
										{ icon: CSS, title: "CSS" },
										{ icon: ReactImg, title: "ReactJS" },
										{ icon: Nextjs, title: "NextJS" },
										{ icon: Sanity, title: "Sanity" },
										{ icon: Stripe, title: "Stripe Payment Gateway" },
									]}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Projects;
