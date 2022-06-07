import AOS from "aos";
import { useEffect } from "react";
import "./About.scss";

const About = () => {
	useEffect(() => {
		AOS.init({ duration: 2000, once: true });
	}, []);

	return (
		<>
			<div name="about" className="about-page px-2 px-sm-3 px-md-4">
				<div className="container">
					<div className="row">
						<div className="col-xs-12 col-sm-6 text-sm-start text-md-end">
							<p className="title" data-aos="fade-up" data-aos-delay="100">
								<span className="text-animate-hover">A</span>
								<span className="text-animate-hover">b</span>
								<span className="text-animate-hover">o</span>
								<span className="text-animate-hover">u</span>
								<span className="text-animate-hover">t</span>
								<span className="text-animate-hover"> </span>
								<span className="text-animate-hover">m</span>
								<span className="text-animate-hover">e</span>
							</p>
						</div>
					</div>

					<div className="description">
						<div className="row">
							<div className="col-xs-12 col-sm-6 text-sm-center text-md-end">
								<p
									className="intro"
									data-aos="fade-up"
									data-aos-delay="200"
									data-aos-once="true"
								>
									Hi! I'm Jordan, nice to meet you.
								</p>
							</div>
							<div className="col-xs-12 col-sm-6">
								<p data-aos="fade-up" data-aos-delay="300" data-aos-once="true">
									I am a software engineer currently working in the healthcare
									field. This has helped me build a strong foundation of soft
									skills relating to communication, teamwork, time-management,
									and more. I document patients' progress utilizing the EMR
									system as well as creating home exercise programs using a web
									application.
								</p>
								<p data-aos="fade-up" data-aos-delay="400" data-aos-once="true">
									Growing up, I always loved tech. I decided to take a leap and
									train in modern app development at Springboard, completing
									both their prep program and Software Engineering Career Track,
									resulting in a strong foundation in software development and
									programming principles.
								</p>

								<p data-aos="fade-up" data-aos-delay="500">
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
		</>
	);
};

export default About;
