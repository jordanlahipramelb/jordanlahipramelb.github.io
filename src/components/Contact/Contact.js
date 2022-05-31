import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import { useState, useEffect, useRef } from "react";
import "./Contact.scss";
import emailjs from "@emailjs/browser";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import Footer from "../Footer/Footer";

const Contact = () => {
	const [letterClass, setLetterClass] = useState("text-animate");
	const refForm = useRef();

	// runs once
	// sets class names from 'text-animate' to 'text-animate-hover'
	// after 4 seconds in order to use animation for class
	useEffect(() => {
		setTimeout(() => {
			setLetterClass("text-animate-hover");
		}, 3000);
	}, []);

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_ze6tg12",
				"template_c0aj0tf",
				refForm.current,
				"7mInnB1kJAtct1ix9"
			)
			.then(
				() => {
					alert("Message successfully sent!");
					window.location.reload(false);
				},
				() => {
					alert("Failed to send message, please try again.");
				}
			);
	};
	return (
		<>
			<div className="contact-page pt-2 pt-sm-3 pt-md-2">
				<div className="container">
					<div className="row">
						<p className="title">
							<AnimatedLetters
								letterClass={letterClass}
								strArr={["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"]}
								idx={15}
							/>
						</p>
						<p className="info">
							If you have any questions, fill out the form below and I will get
							back to you as soon as possible!
						</p>
					</div>

					{/* <div className="row">
					<div className=" col-xs-12 col-sm-6"> */}
					<div className="contact-form">
						<form className="row" ref={refForm} onSubmit={sendEmail}>
							<div className="col-md-6">
								<input
									type="text"
									name="name"
									placeholder="Name"
									className="form-control"
									required
								/>
							</div>
							<div className="col-md-6">
								<input
									placeholder="Subject"
									type="text"
									name="subject"
									className="form-control"
									required
								/>
							</div>
							<div className="col-12">
								<input
									type="email"
									name="email"
									placeholder="Email"
									className="form-control"
									required
								/>
							</div>
							<div className="col-12">
								<textarea
									placeholder="Message"
									name="message"
									className="form-control"
									required
								/>
							</div>
							<div className="col-12">
								<input type="submit" className="flat-button" value="SEND" />
							</div>
						</form>
						{/* </div>
					</div> */}

						{/* <div className=" col-xs-12 col-sm-6">
						<div className="map-wrap">
							<MapContainer center={[36.114647, -115.172813]} zoom={11}>
								<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
								<Marker position={[36.114647, -115.172813]}></Marker>
							</MapContainer>
						</div>
					</div> */}
					</div>
				</div>
			</div>
			<Footer />

			<Loader type="pacman" />
		</>
	);
};

export default Contact;
