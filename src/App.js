import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";

function App() {
	return (
		<>
			<Navbar />
			<Header />
			<About />
			<Skills />
			<Projects />
			<Contact />
			<Footer />
		</>
	);
}

export default App;
