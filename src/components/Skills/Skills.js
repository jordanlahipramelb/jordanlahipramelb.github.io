import "./Skills.scss";
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
import AOS from "aos";
import { useEffect } from "react";

const Skills = () => {
	useEffect(() => {
		AOS.init({ duration: 2000 });
	}, []);

	return (
		<>
			<div name="skills" className="skills-page px-2 px-sm-3 px-md-4">
				<div className="container">
					<div className="row">
						<p
							className="title"
							data-aos="fade-up"
							data-aos-offset="200"
							data-aos-delay="50"
						>
							<span className="text-animate-hover">S</span>
							<span className="text-animate-hover">k</span>
							<span className="text-animate-hover">i</span>
							<span className="text-animate-hover">l</span>
							<span className="text-animate-hover">l</span>
							<span className="text-animate-hover">s</span>
						</p>
					</div>
					<div className="description">
						<div className="row">
							<p data-aos="fade-up" data-aos-offset="200" data-aos-delay="60">
								These are the technologies I've worked with.
							</p>
						</div>
					</div>

					<div
						className="images"
						data-aos="fade-up"
						data-aos-offset="200"
						data-aos-delay="70"
					>
						<div className="row row-cols-sm-3 row-cols-md-6">
							<div className="col">
								<img src={HTML} alt="HTML" />
								<p>HTML</p>
							</div>
							<div className="col">
								<img src={CSS} alt="CSS" />
								<p>CSS</p>
							</div>
							<div className="col">
								<img src={JavaScript} alt="JavaScript" />
								<p>JavaScript</p>
							</div>
							<div className="col">
								<img src={ReactImg} alt="React" />
								<p>React</p>
							</div>
							<div className="col">
								<img src={ReduxImg} alt="Redux" className="redux" />
								<p>Redux</p>
							</div>
							<div className="col">
								<img src={Sass} alt="Sass" className="sass" />
								<p>Sass</p>
							</div>
							<div className="col">
								<img src={Bootstrap} alt="Bootstrap" />
								<p>Bootstrap</p>
							</div>

							<div className="col">
								<img src={Node} alt="Node" />
								<p>Node</p>
							</div>

							<div className="col">
								<img src={Express} alt="Express" />
								<p>Express</p>
							</div>
							<div className="col">
								<img src={Python} alt="Python" />
								<p>Python</p>
							</div>
							<div className="col">
								<img src={Flask} alt="Flask" className="flask" />
								<p>Flask</p>
							</div>
							<div className="col">
								<img src={PostgreSQL} alt="PostgreSQL" />
								<p>PostgreSQL</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Skills;
