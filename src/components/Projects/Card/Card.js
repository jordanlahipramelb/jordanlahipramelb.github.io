import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Projects.scss";

const Card = ({
	linkDemo,
	linkGithub,
	iconTitleImg,
	screenshotImg,
	title,
	description,
	smallText,
	technologies = [],
}) => {
	return (
		<div className="card my-1" data-aos="fade-up" data-aos-delay="60">
			<a href={linkDemo} target="_blank">
				<img
					src={screenshotImg}
					className="card-img-top"
					alt={`${title} screenshot`}
				/>
			</a>
			<div className="card-body">
				<h5 className="card-title">
					<FontAwesomeIcon icon={iconTitleImg} /> {title}
				</h5>
				<p className="card-text">{description}</p>
				<a href={linkGithub} target="_blank">
					<button type="button" className="btn btn-secondary mx-1">
						GitHub
					</button>
				</a>
				<a href={linkDemo} target="_blank">
					<button type="button" className="btn btn-info">
						Demo
					</button>
				</a>
				<br />
				<br />
				<p className="text-muted">{smallText}</p>

				<div className="card-footer">
					{technologies.map((technology) => (
						<img
							src={technology.icon}
							alt={technology.title}
							title={technology.title}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Card;
