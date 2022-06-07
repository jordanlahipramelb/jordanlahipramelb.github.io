import { useRef, useEffect } from "react";
import "./Contact.scss";
import emailjs from "@emailjs/browser";
import AOS from "aos";

const Contact = () => {
	const refForm = useRef();

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

	useEffect(() => {
		AOS.init({ duration: 2000, once: true });
	}, []);
	return (
		<>
			<div name="contact" className="contact-page px-2 px-sm-3 px-md-4">
				<div className="container">
					<div className="row">
						<p
							className="title"
							data-aos="fade-up"
							data-aos-offset="200"
							data-aos-delay="50"
						>
							<span className="text-animate-hover">C</span>
							<span className="text-animate-hover">o</span>
							<span className="text-animate-hover">n</span>
							<span className="text-animate-hover">t</span>
							<span className="text-animate-hover">a</span>
							<span className="text-animate-hover">c</span>
							<span className="text-animate-hover">t</span>
							<span className="text-animate-hover"> </span>
							<span className="text-animate-hover">m</span>
							<span className="text-animate-hover">e</span>
						</p>

						<div className="description pb-1">
							<div className="row">
								<p data-aos="fade-up" data-aos-offset="200" data-aos-delay="60">
									If you have any questions, fill out the form below and I will
									get back to you as soon as possible!
								</p>
							</div>
						</div>
					</div>

					<div className="contact-form">
						<form className="row" ref={refForm} onSubmit={sendEmail}>
							<div
								className="col-md-6"
								data-aos="fade-up"
								data-aos-offset="200"
								data-aos-delay="50"
							>
								<input
									type="text"
									name="name"
									placeholder="Name"
									className="form-control"
									required
								/>
							</div>
							<div
								className="col-md-6"
								data-aos="fade-up"
								data-aos-offset="200"
								data-aos-delay="50"
							>
								<input
									placeholder="Subject"
									type="text"
									name="subject"
									className="form-control"
									required
								/>
							</div>
							<div
								className="col-12"
								data-aos="fade-up"
								data-aos-offset="200"
								data-aos-delay="50"
							>
								<input
									type="email"
									name="email"
									placeholder="Email"
									className="form-control"
									required
								/>
							</div>
							<div
								className="col-12"
								data-aos="fade-up"
								data-aos-offset="200"
								data-aos-delay="50"
							>
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
		</>
	);
};

export default Contact;
